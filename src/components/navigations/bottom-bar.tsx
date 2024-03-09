import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTheme} from 'react-native-paper';

import SystemNavigationBar from 'react-native-system-navigation-bar';

interface Icon {
  color: string;
}

export const OSNavigationBar = () => {
  const theme = useTheme();
  SystemNavigationBar.setNavigationColor(theme.colors.elevation.level2);
  SystemNavigationBar.setBarMode('dark', 'navigation');
  return <></>;
};

export const ServicesIcon = (props: Icon) => {
  const {color} = props;
  return <MaterialCommunityIcons name="google-fit" color={color} size={26} />;
};

export const UserRecordsIcon = (props: Icon) => {
  const {color} = props;
  return <MaterialCommunityIcons name="timetable" color={color} size={26} />;
};
