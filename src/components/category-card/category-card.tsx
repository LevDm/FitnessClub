import React from 'react';
import {StyleSheet} from 'react-native';
import {FitnessCategory, FitnessClasses} from '../../data/fitness-classes';
import {Card, useTheme} from 'react-native-paper';

export const CategoryCard = (
  props: FitnessCategory & {
    onPress: (c: FitnessClasses) => void;
    format?: 'i1' | 'i2';
  },
) => {
  const {id, img, title, classes, onPress: handler, format = 'i2'} = props;

  const theme = useTheme();

  const onPress = () => {
    handler(classes);
  };

  return (
    <Card
      key={id}
      style={[styles.card, format === 'i1' ? styles.card_i1 : styles.card_i2]}
      onPress={onPress}>
      <Card.Cover source={img} style={format === 'i2' && {height: '75%'}} />
      <Card.Title
        title={title}
        titleStyle={
          format === 'i1' && [
            styles.cardTitle,
            {
              color: theme.colors.onPrimary,
              textShadowColor: theme.colors.primary,
            },
          ]
        }
        style={format === 'i1' && styles.cardHeader}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: '2%',
    overflow: 'hidden',
    height: 'auto',
  },
  card_i1: {
    width: '96%',
  },
  card_i2: {
    aspectRatio: 1,
    width: '46%',
  },
  cardHeader: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: 'auto',
  },
  cardTitle: {
    fontWeight: 'bold',
    textShadowOffset: {
      width: -1,
      height: -1,
    },
    textShadowRadius: 9,
  },
});
