import React from 'react';

import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';

import {ServicesStack, UserRecodrsScreen} from './screens';

import {OSNavigationBar, ServicesIcon, UserRecordsIcon} from './components';

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
