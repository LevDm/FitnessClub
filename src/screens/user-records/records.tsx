import React, {useCallback, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ListRenderItem,
  View,
} from 'react-native';

import {ActivityIndicator, HelperText, Text} from 'react-native-paper';

import {Header, RecordCard} from '../../components';

import {UserRecords, useLStorage} from '../../utils/local-storage';

import {ScreenNavigationProps} from '../types';

export const UserRecodrsScreen: React.FC<ScreenNavigationProps> = ({
  navigation,
  route,
}) => {
  const {isLoading, error, data, updStorage, loadStorage} = useLStorage();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadStorage();
    });
    return unsubscribe;
  }, [navigation, loadStorage]);

  const cancelHanler = useCallback(
    (id: string) => {
      const index = data.findIndex(i => i.id === id);
      const newData = JSON.parse(JSON.stringify(data));
      newData[index] = {
        ...newData[index],
        status: 'cancled',
      };
      updStorage(newData);
    },
    [data, updStorage],
  );

  const renderItem: ListRenderItem<UserRecords> = ({item}) => {
    return <RecordCard key={item.id} {...item} cancelHanler={cancelHanler} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        route={route}
        options={{title: 'Записи'}}
      />
      {!!error && <HelperText type="error">{`Ошибка: ${error}`}</HelperText>}
      <FlatList
        data={data}
        refreshing={isLoading}
        contentContainerStyle={styles.scrollContainer}
        ListEmptyComponent={
          <View>
            {(isLoading && <ActivityIndicator animating={true} />) || (
              <Text>У вас пока нет записей</Text>
            )}
          </View>
        }
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    gap: 12,
    padding: '3%',
  },
});
