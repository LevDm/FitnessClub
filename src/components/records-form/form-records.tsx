/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable radix */
import React, {useMemo} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {View} from 'react-native';
import {Button, Card} from 'react-native-paper';

import {InputArea} from './text-input';
import {InputDateTimeArea} from './datetime-input';
import {FormValues, SuccsesFormValues} from './types';
import {compareAsc} from 'date-fns';

const DEFAULT_FORM = {
  name: '',
  phone: '',
  date: '',
  time: '',
  comment: '',
};

type RecordFormProps = {
  onSubmit: (value: SuccsesFormValues) => boolean;
};

export const RecordForm = (props: RecordFormProps) => {
  const {onSubmit} = props;

  const {
    handleSubmit,
    watch,
    control,
    formState: {errors},
    setError,
    reset,
  } = useForm({
    reValidateMode: 'onChange',
    defaultValues: DEFAULT_FORM,
  });

  const submit: SubmitHandler<FormValues> = config => {
    const {date, time} = config;
    const [hours, minutes] = time.split(':').map((v: string) => parseInt(v));
    const checkDate = new Date(date);
    checkDate.setUTCHours(hours);
    checkDate.setUTCMinutes(minutes);

    const compare = compareAsc(checkDate, new Date());

    if (compare !== 1) {
      setError('date', {
        type: 'valueAsDate',
        message: 'Некорректное значение',
      });
      setError('time', {
        type: 'valueAsDate',
        message: 'Некорректное значение',
      });
    } else {
      const res = onSubmit({
        date: checkDate.toUTCString(),
        name: config.name,
        phone: config.phone,
        comment: config.comment,
      });
      if (res) reset();
    }
  };

  const watchData = watch();

  const submitDisabled = useMemo(() => {
    const watchCopy = {...watchData};
    delete (watchCopy as any).comment;

    const input = Object.values(watchCopy);

    return input.includes('');
  }, [watchData]);

  return (
    <Card>
      <Card.Title title={'Форма записи'} />
      <Card.Content style={{gap: 12}}>
        <InputArea
          id="name"
          label="Имя"
          required
          control={control}
          errors={errors}
        />

        <InputArea
          id="phone"
          label="Номер телефона"
          required
          control={control}
          errors={errors}
        />
        <View
          style={{
            flexDirection: 'row',
            gap: 12,
          }}>
          <InputDateTimeArea
            id="date"
            label="Дата"
            required
            control={control}
            errors={errors}
          />

          <InputDateTimeArea
            id="time"
            label="Время"
            required
            control={control}
            errors={errors}
          />
        </View>

        <InputArea
          id="comment"
          label="Коментарий"
          control={control}
          errors={errors}
        />

        <Button
          mode="contained"
          style={{opacity: submitDisabled ? 0.5 : 1}}
          onPress={handleSubmit(submit)}>
          Записаться
        </Button>
      </Card.Content>
    </Card>
  );
};
