import React, {useCallback} from 'react';
import {StyleSheet, SafeAreaView, FlatList, ListRenderItem} from 'react-native';

import {FitnessClass} from '../../data';
import {observer} from 'mobx-react-lite';
import {useStore} from '../../utils/mobx/store-provider';
import {Card, Text} from 'react-native-paper';

interface ServicesScreenProps {
  navigation: any;
}

const ServicesScreen: React.FC<ServicesScreenProps> = observer(
  ({navigation}) => {
    const {getFiltredServices} = useStore();

    const services = getFiltredServices();

    const onPress = useCallback(
      (value: FitnessClass) => {
        navigation.navigate('Booking', {fitnessClass: value});
      },
      [navigation],
    );

    const renderItem: ListRenderItem<FitnessClass> = ({item}) => {
      return <ServisCard key={item.id} servis={item} onPress={onPress} />;
    };

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={services}
          renderItem={renderItem}
          ListEmptyComponent={
            <Text variant="headlineSmall">Услуги не найдены</Text>
          }
          contentContainerStyle={styles.scrollContainer}
        />
      </SafeAreaView>
    );
  },
);

type ServisCardProps = {
  servis: FitnessClass;
  onPress: (v: FitnessClass) => void;
};
const ServisCard = React.memo((props: ServisCardProps) => {
  const {servis, onPress: handler} = props;
  const {id, name, price} = servis;
  const onPress = () => {
    handler(servis);
  };

  return (
    <Card key={id} onPress={onPress} style={styles.card}>
      <Card.Title title={name} subtitle={price} />
    </Card>
  );
});

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

export default ServicesScreen;
