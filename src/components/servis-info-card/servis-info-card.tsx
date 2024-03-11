/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Card, Text} from 'react-native-paper';

import {FitnessClass} from '../../data';

interface ServisInfo {
  fitnessClass: FitnessClass;
}
export const ServisInfo: React.FC<ServisInfo> = ({fitnessClass}) => {
  return (
    <Card>
      <Card.Title
        title={fitnessClass.name}
        titleVariant="titleLarge"
        subtitle={fitnessClass.description}
        subtitleNumberOfLines={20}
      />
      <Card.Content style={{marginTop: 8}}>
        <Text variant="bodyMedium">
          Продолжительность занятия: {fitnessClass.duration}
        </Text>
        <Text variant="bodyMedium">
          Стоимость занятия: {fitnessClass.price}
        </Text>
      </Card.Content>
    </Card>
  );
};
