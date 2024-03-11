/* eslint-disable curly */
/* eslint-disable no-extra-boolean-cast */
import React from 'react';

import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecordForm, SuccsesFormValues} from '../../components/records-form';
import {ScreenNavigationProps} from '../types';
import {ServisInfo} from '../../components/servis-info-card/servis-info-card';
import {FitnessClass} from '../../data';
import {useLStorage} from '../../utils/local-storage/use-lstorage';
import {Button, Dialog, HelperText, Portal, Text} from 'react-native-paper';

const BookingScreen: React.FC<ScreenNavigationProps> = ({
  navigation,
  route,
}) => {
  const {fitnessClass}: {fitnessClass: FitnessClass} = route.params;

  const [visible, setVisible] = React.useState<('success' | 'error') | false>(
    false,
  );

  const {isLoading, error, data, updStorage} = useLStorage();

  const exit = () => {
    navigation.replace('Categories');
    navigation.navigate('Records');
  };

  const onSubmit = (value: SuccsesFormValues) => {
    if (!isLoading && !Boolean(!!error)) {
      const UserServisRecord = {
        ...value,
        servis: fitnessClass,
      };

      updStorage([...data, UserServisRecord]);

      setVisible('success');
      return true;
    } else {
      setVisible('error');
      return false;
    }
  };

  const hideDialog = () => {
    if (visible === 'success') exit();
    setVisible(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <ServisInfo fitnessClass={fitnessClass} />
          {(isLoading || !!error) && (
            <HelperText type="info">
              {isLoading ? 'Загрузка записей' : `Ошибка: ${error}`}
            </HelperText>
          )}
          <RecordForm onSubmit={onSubmit} />
        </ScrollView>
      </SafeAreaView>

      <Portal>
        <Dialog visible={Boolean(visible)} onDismiss={hideDialog}>
          <Dialog.Title>
            {visible === 'success' ? 'Запись удалась!' : 'Ошибка'}
          </Dialog.Title>
          {visible === 'error' && (
            <Dialog.Content>
              <Text>Пропробуйте записаться снова</Text>
            </Dialog.Content>
          )}
          <Dialog.Actions>
            <Button onPress={hideDialog}>Ок</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    gap: 16,
    padding: '4%',
  },
});

export default BookingScreen;
