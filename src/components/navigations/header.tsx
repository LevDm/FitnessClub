import React, {useState} from 'react';

import {Appbar, Searchbar, useTheme} from 'react-native-paper';
import {getHeaderTitle, HeaderTitleProps} from '@react-navigation/elements';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

  const backPress = () => {
    navigation.goBack();
  };

  return (
    <>
      <Appbar.Header elevated>
        {back ? <Appbar.BackAction onPress={backPress} /> : null}
        <Appbar.Content title={title} />
      </Appbar.Header>
      <StatusBar
        backgroundColor={theme.colors.elevation.level2}
        barStyle={'dark-content'}
      />
    </>
  );
};

type IconProps = {
  color: string;
  size: number;
  allowFontScaling?: boolean;
};
const Icon = (props: IconProps) => (
  <MaterialIcons name="arrow-back" {...props} />
);

type SearchBarProps = {
  backPress: () => void;
};

const SearchBar = (props: SearchBarProps) => {
  const {backPress} = props;

  const [searchText, setSearchText] = React.useState('');

  const searchBackPress = () => {
    setSearchText('');
    backPress();
  };

  return (
    <Searchbar
      icon={Icon}
      onIconPress={searchBackPress}
      placeholder="Поиск"
      onChangeText={setSearchText}
      value={searchText}
    />
  );
};

export const SearchHeader = (props: HeaderProps) => {
  const {navigation, route, options, back} = props;
  const title = getHeaderTitle(options, route.name);
  const theme = useTheme();

  const [openSearch, setOpenSearch] = useState(false);

  const backPress = () => {
    navigation.goBack();
  };

  const searchBackPress = () => {
    setOpenSearch(false);
  };

  return (
    <>
      <Appbar.Header elevated>
        {!openSearch && back ? <Appbar.BackAction onPress={backPress} /> : null}
        {!openSearch && <Appbar.Content title={title} />}
        {(openSearch && <SearchBar backPress={searchBackPress} />) || (
          <Appbar.Action
            icon="magnify"
            onPress={() => {
              setOpenSearch(true);
            }}
          />
        )}
      </Appbar.Header>
      <StatusBar
        backgroundColor={theme.colors.elevation.level2}
        barStyle={'dark-content'}
      />
    </>
  );
};
