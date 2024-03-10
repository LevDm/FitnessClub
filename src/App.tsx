import React from 'react';

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
    <>
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
    </>
  );
};
export default App;
