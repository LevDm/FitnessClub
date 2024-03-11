/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';

import {UserRecords} from '../../utils/local-storage';
import {Card, HelperText, List, Text, useTheme} from 'react-native-paper';
import {format} from 'date-fns';

export const RecordCard = React.memo(
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
  card: {
    width: '100%',
    height: 'auto',
  },
});
