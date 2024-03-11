import React, {useCallback} from 'react';
import {StyleSheet, SafeAreaView, FlatList, ListRenderItem} from 'react-native';
import {Text} from 'react-native-paper';

import {FitnessClass} from '../../data';

import {observer} from 'mobx-react-lite';
import {useStore} from '../../utils/mobx';

import {ScreenNavigationProps} from '../types';

import {ServisCard} from '../../components';

const ServicesScreen: React.FC<ScreenNavigationProps> = observer(
  ({navigation}) => {
    const {getFiltredServices} = useStore();

    const services = getFiltredServices();

    const onPress = useCallback(
      (value: FitnessClass) => {
        navigation.navigate('Booking', {fitnessClass: value});
      },
      [navigation],
    );

    const renderItem: ListRenderItem<FitnessClass> = ({item}) => {
      return <ServisCard key={item.id} servis={item} onPress={onPress} />;
    };

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={services}
          renderItem={renderItem}
          ListEmptyComponent={
            <Text variant="headlineSmall">Услуги не найдены</Text>
          }
          contentContainerStyle={styles.scrollContainer}
        />
      </SafeAreaView>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    gap: 12,
    padding: '3%',
  },
});

export default ServicesScreen;
