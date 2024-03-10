import React from 'react';

import {Appbar, useTheme} from 'react-native-paper';
import {getHeaderTitle, HeaderTitleProps} from '@react-navigation/elements';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type HeaderProps = {
  navigation: StackNavigationProp<ParamListBase, string, undefined>;
  route: RouteProp<ParamListBase, string>;
  options: {
    title?: string | undefined;
    headerTitle?:
      | string
      | ((props: HeaderTitleProps) => React.ReactNode)
      | undefined;
  };
  back?: {title: string};
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
