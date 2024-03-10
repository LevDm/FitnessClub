import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Header} from '../../components/navigations/header';

interface ServicesScreenProps {
  navigation: any;
  route: any;
}

const UserRecodrsScreen: React.FC<ServicesScreenProps> = (
  props: ServicesScreenProps,
) => {
  console.log(props.navigation);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={props.navigation}
        route={props.route}
        options={{title: 'Записи'}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#f1f1f1',
  },
});

export default UserRecodrsScreen;
