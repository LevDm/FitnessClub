import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';

import ServicesStack from './screens/services/services-stack';
import UserRecodrsScreen from './screens/user-records/records';

import {
  OSNavigationBar,
  ServicesIcon,
  UserRecordsIcon,
} from './components/navigations/bottom-bar';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="ServicesStack">
        <Tab.Screen
          name="ServicesStack"
          component={ServicesStack}
          options={{
            tabBarLabel: 'Услуги',
            tabBarIcon: ServicesIcon,
          }}
        />
        <Tab.Screen
          name="Records"
          component={UserRecodrsScreen}
          options={{
            tabBarLabel: 'Мои записи',
            tabBarIcon: UserRecordsIcon,
          }}
        />
      </Tab.Navigator>
      <OSNavigationBar />
    </NavigationContainer>
  );
};
export default App;
