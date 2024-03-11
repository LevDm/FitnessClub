/* eslint-disable no-useless-escape */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Controller} from 'react-hook-form';
import {View} from 'react-native';
import {HelperText, TextInput, TextInputProps} from 'react-native-paper';

import TextInputMask from 'react-native-text-input-mask';
import {InputAreaProps} from './types';

export const InputArea = (props: InputAreaProps) => {
  const {id, label, control, required = false, errors} = props;

  const currentError = errors[id]?.message ?? '';

  return (
    <Controller
      name={id}
      rules={{
        required: {
          value: required,
          message: 'Обязательное поле',
        },
        pattern:
          id === 'phone'
            ? {
                value: /^(\+7)(\-)(\d{3})(\-)(\d{3})(\-)(\d{2})(\-)(\d{2})$/,
                message: 'Требуется формат +7-000-000-00-00',
              }
            : undefined,
      }}
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <View
          style={{
            flex: 1,
          }}>
          <TextInput
            mode="outlined"
            label={`${label} ${required ? '*' : ''}`}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={Boolean(currentError)}
            {...(id === 'phone' && {
              render: (lprops: TextInputProps) => (
                <TextInputMask {...lprops} mask="+7-[000]-[000]-[00]-[00]" />
              ),
              inputMode: 'numeric',
            })}
          />
          <HelperText type="error" visible={Boolean(currentError)}>
            {currentError}
          </HelperText>
        </View>
      )}
    />
  );
};
