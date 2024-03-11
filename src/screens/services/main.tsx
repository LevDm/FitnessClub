import React from 'react';

import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';

import {CategoryCard} from '../../components';

import {FitnessCategory, useData} from '../../data';
import {ScreenNavigationProps} from '../types';

const CategoriesScreen: React.FC<ScreenNavigationProps> = () => {
  const data = useData('categorys') as FitnessCategory[];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CategoryCard category={data[0]} format="i1" />
        <Text variant="headlineSmall" style={styles.headline}>
          Категории
        </Text>
        <View style={styles.tileContainer}>
          {data.slice(1)?.map(item => (
            <CategoryCard key={item.id} category={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    gap: 8,
    padding: '2%',
  },
  headline: {
    alignSelf: 'flex-start',
    marginLeft: '4%',
  },
  tileContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    paddingBottom: '5%',
  },
});

export default CategoriesScreen;
