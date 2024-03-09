import React from 'react';

import {Appbar, useTheme} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StatusBar} from 'react-native';

type HeaderProps = {
  navigation: any;
  route: RouteProp<ParamListBase, string>;
  options: any;
  back?: any;
};

export const Header = (props: HeaderProps) => {
  const {navigation, route, options, back} = props;
  const title = getHeaderTitle(options, route.name);
  const theme = useTheme();
  return (
    <Appbar.Header elevated statusBarHeight={0}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      <StatusBar
        backgroundColor={theme.colors.elevation.level2}
        barStyle={'dark-content'}
      />
    </Appbar.Header>
  );
};
