/* eslint-disable curly */
/* eslint-disable no-extra-boolean-cast */
import React, {useEffect} from 'react';

import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Button, Dialog, HelperText, Portal, Text} from 'react-native-paper';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {RecordForm, SuccsesFormValues, ServisInfo} from '../../components';
import {ScreenNavigationProps} from '../types';

import {FitnessClass} from '../../data';
import {useLStorage} from '../../utils/local-storage';

const BookingScreen: React.FC<ScreenNavigationProps> = ({
  navigation,
  route,
}) => {
  const {fitnessClass}: {fitnessClass: FitnessClass} = route.params;

  const [visible, setVisible] = React.useState<{
    type?: 'success' | 'error';
    value: boolean;
  }>({value: false});

  const {isLoading, error, data, updStorage, loadStorage} = useLStorage();

  useEffect(() => {
    loadStorage();
  }, [loadStorage]);

  const exit = () => {
    navigation.replace('Categories');
    navigation.navigate('Records');
  };

  const onSubmit = async (value: SuccsesFormValues) => {
    if (!isLoading && !Boolean(!!error)) {
      const UserServisRecord = {
        ...value,
        id: `${data.length}-${new Date().getTime()}`,
        servis: fitnessClass,
      };

      await updStorage([...data, UserServisRecord]);

      setVisible({type: 'success', value: true});
      return true;
    } else {
      setVisible({type: 'error', value: true});
      return false;
    }
  };

  const hideDialog = () => {
    if (visible.type === 'success') exit();
    setVisible(prev => ({...prev, value: false}));
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
        <Dialog visible={visible.value} onDismiss={hideDialog}>
          <Dialog.Title>
            {visible.type === 'success' ? 'Запись удалась!' : 'Ошибка'}
          </Dialog.Title>
          {visible.type === 'error' && (
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
