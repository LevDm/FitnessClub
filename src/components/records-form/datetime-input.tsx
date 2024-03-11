/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Controller} from 'react-hook-form';
import {Pressable} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';
import {DatePickerModal, TimePickerModal} from 'react-native-paper-dates';
import {CalendarDate} from 'react-native-paper-dates/lib/typescript/Date/Calendar';

import {format} from 'date-fns';

import {InputAreaProps, InputProps} from './types';

export const InputDateTimeArea = (props: InputAreaProps) => {
  const {id, control, required = false} = props;

  return (
    <>
      <Controller
        name={id}
        rules={{
          required: {
            value: required,
            message: 'Обязательное поле',
          },
        }}
        control={control}
        render={params => <DateTimeInput {...params} {...props} />}
      />
    </>
  );
};

const DateTimeInput = (props: InputProps) => {
  const {
    id,
    errors,
    label,
    required = false,
    field: {onChange, value},
  } = props;

  const currentError = errors[id]?.message ?? '';

  const [visible, setVisible] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({hours, minutes}: {hours: number; minutes: number}) => {
      setVisible(false);
      const date = new Date();
      date.setMinutes(minutes);
      date.setHours(hours);
      onChange(format(date, 'HH:mm'));
    },
    [setVisible, onChange],
  );

  const onConfirmSingle = React.useCallback(
    (params: {date: CalendarDate}) => {
      setVisible(false);
      const date = params.date?.toISOString() ?? '';
      onChange(date);
    },
    [setVisible, onChange],
  );

  return (
    <>
      <Pressable
        style={{
          flex: 1,
        }}
        onPress={() => setVisible(true)}>
        <TextInput
          mode="outlined"
          label={`${label} ${required ? '*' : ''}`}
          editable={false}
          onChangeText={onChange}
          value={
            id === 'date' && value !== '' ? format(value, 'dd/MM/y') : value
          }
          error={Boolean(currentError)}
        />
        <HelperText type="error" visible={Boolean(currentError)}>
          {currentError}
        </HelperText>
      </Pressable>
      {id === 'date' && (
        <DatePickerModal
          locale="ru"
          label="Дата тренировки"
          saveLabel="Да"
          mode="single"
          visible={visible}
          onDismiss={onDismiss}
          date={value !== '' ? new Date(value) : undefined}
          onConfirm={onConfirmSingle}
          inputEnabled={false}
          presentationStyle="pageSheet"
          startYear={new Date().getUTCFullYear()}
          endYear={new Date().getUTCFullYear() + 1}
          validRange={{
            startDate: new Date(),
          }}
        />
      )}
      {id === 'time' && (
        <TimePickerModal
          label="Время тренировки"
          cancelLabel={'Отмена'}
          confirmLabel={'Да'}
          locale="ru"
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          hours={new Date().getUTCHours() + 1}
          minutes={0}
        />
      )}
    </>
  );
};
