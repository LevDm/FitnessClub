import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

interface CategoriesScreenProps {
  navigation: any;
}

const CategoriesScreen: React.FC<CategoriesScreenProps> = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#f1f1f1',
  },
});

export default CategoriesScreen;
