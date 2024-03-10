import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import {
  FitnessCategory,
  FitnessClasses,
  useData,
} from '../../data/fitness-classes';
import {Text} from 'react-native-paper';
import {CategoryCard} from '../../components/category-card/category-card';

interface CategoriesScreenProps {
  navigation: any;
}

const CategoriesScreen: React.FC<CategoriesScreenProps> = ({navigation}) => {
  const data = useData('categorys') as FitnessCategory[];

  const pressHandler = (classes: FitnessClasses) => {
    console.log(classes);
    navigation.navigate('Services');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CategoryCard {...data[0]} format="i1" onPress={pressHandler} />
        <Text variant="headlineSmall" style={styles.headline}>
          Категории
        </Text>
        <View style={styles.tileContainer}>
          {data.slice(1)?.map(item => (
            <CategoryCard key={item.id} {...item} onPress={pressHandler} />
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
