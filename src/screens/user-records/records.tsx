/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  ListRenderItem,
  View,
} from 'react-native';
import {Header} from '../../components/navigations/header';
import {UserRecords, useLStorage} from '../../utils/local-storage/use-lstorage';
import {
  ActivityIndicator,
  Card,
  HelperText,
  List,
  Text,
  useTheme,
} from 'react-native-paper';
import {format} from 'date-fns';
import {ScreenNavigationProps} from '../types';

const UserRecodrsScreen: React.FC<ScreenNavigationProps> = ({
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

const RecordCard = React.memo(
  (props: UserRecords & {cancelHanler: (id: string) => void}) => {
    const {id, date, servis, status, cancelHanler} = props;
    const {name, duration, description, price} = servis;

    const [expanded, setExpanded] = React.useState(false);

    const handlePress = () => setExpanded(!expanded);

    const theme = useTheme();

    const isCancled = status === 'cancled';

    const cancelPress = () => {
      cancelHanler(id);
    };

    return (
      <Card key={id} style={styles.card} onPress={handlePress}>
        <Card.Content>
          <List.Accordion
            style={{
              pointerEvents: 'box-none',
            }}
            rippleColor={'transparent'}
            theme={{colors: {background: 'transparent'}}}
            title={name}
            description={
              <Text>
                {format(date, 'HH:mm dd/MM/y')}
                {'   '}
                {isCancled && (
                  <HelperText style={{marginLeft: 10}} type="error">
                    Отменена
                  </HelperText>
                )}
              </Text>
            }
            expanded={expanded}>
            <List.Item
              title="Продолжительность занятия"
              description={duration}
            />
            <List.Item
              title="Описание"
              description={description}
              descriptionNumberOfLines={10}
            />
            <List.Item title="Оплата" description={price} />
            <List.Item
              titleStyle={{
                textAlign: 'center',
                color: theme.colors.error,
                opacity: isCancled ? 0.3 : 1,
              }}
              title="Отменить"
              disabled={isCancled}
              onPress={cancelPress}
            />
          </List.Accordion>
        </Card.Content>
      </Card>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    gap: 12,
    padding: '3%',
  },
  card: {
    width: '100%',
    height: 'auto',
  },
});

export default UserRecodrsScreen;
