import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CategoriesScreen from './main';
import ServicesScreen from './services';
import BookingScreen from './booking';

const Stack = createStackNavigator();

import {Header} from '../../components/navigations/header';

const ServicesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        header: Header,
      }}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{title: 'Фитнес клуб'}}
      />
      <Stack.Screen
        name="Services"
        component={ServicesScreen}
        options={{title: 'Услуги'}}
      />
      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{title: 'Запись на тренировку'}}
      />
    </Stack.Navigator>
  );
};

export default ServicesStack;
