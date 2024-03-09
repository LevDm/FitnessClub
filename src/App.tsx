import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ServicesScreen from './screens/services/services';
import BookingScreen from './screens/services/booking';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Services">
        <Stack.Screen
          name="Services"
          component={ServicesScreen}
          options={{title: 'Фитнес клуб'}}
        />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{title: 'Запись на тренировку'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
