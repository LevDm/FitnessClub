import React from 'react';
import {StyleSheet} from 'react-native';

import {Card} from 'react-native-paper';

import {FitnessClass} from '../../data';

type ServisCardProps = {
  servis: FitnessClass;
  onPress: (v: FitnessClass) => void;
};
export const ServisCard = React.memo((props: ServisCardProps) => {
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
  card: {
    width: '100%',
    height: 'auto',
  },
});
