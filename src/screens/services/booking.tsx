import React from 'react';

import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecordForm, SuccsesFormValues} from '../../components/records-form';
import {ScreenNavigationProps} from '../types';
import {ServisInfo} from '../../components/servis-info-card/servis-info-card';
import {FitnessClass} from '../../data';

const BookingScreen: React.FC<ScreenNavigationProps> = ({
  navigation,
  route,
}) => {
  const {fitnessClass}: {fitnessClass: FitnessClass} = route.params;

  console.log(navigation);

  const onSubmit = (value: SuccsesFormValues) => {
    console.log(value);
    navigation.replace('Categories');
    navigation.navigate('Records');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <ServisInfo fitnessClass={fitnessClass} />
          <RecordForm onSubmit={onSubmit} />
        </ScrollView>
      </SafeAreaView>
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
