import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

interface ServicesScreenProps {
  navigation: any;
}

const UserRecodrsScreen: React.FC<ServicesScreenProps> = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#f1f1f1',
  },
});

export default UserRecodrsScreen;
