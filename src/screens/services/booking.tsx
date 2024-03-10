import React, {useMemo} from 'react';
import {Controller, FieldErrors, useForm} from 'react-hook-form';
import {Alert, StyleSheet, ScrollView, SafeAreaView, View} from 'react-native';
import {Button, Card, HelperText, Text, TextInput} from 'react-native-paper';

interface FitnessClass {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
}

interface BookingScreenProps {
  route: any;
}

type IdsForm = 'name' | 'phone' | 'date' | 'time' | 'comment';

type InputAreaProps = {
  id: IdsForm;
  label: string;

  required?: boolean;

  errors: FieldErrors<{
    name: string;
    phone: string;
    date: string;
    time: string;
    comment: string;
  }>;
  control: any;
};

const InputArea = (props: InputAreaProps) => {
  const {id, label, control, required = false, errors} = props;

  const currentError = errors[id]?.type ?? false;

  return (
    <Controller
      name={id}
      rules={{required: required}}
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <View
          style={{
            flex: 1,
          }}>
          <TextInput
            mode="outlined"
            label={`${label} ${required ? '*' : ''}`}
            //style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={Boolean(currentError)}
          />
          <HelperText type="error" visible={Boolean(currentError)}>
            {currentError === 'required' && 'Поле обязательно'}
          </HelperText>
        </View>
      )}
    />
  );
};

const DEFAULT_FORM = {
  name: '',
  phone: '',
  date: '',
  time: '',
  comment: '',
};

const BookingScreen: React.FC<BookingScreenProps> = ({route}) => {
  const {fitnessClass}: {fitnessClass: FitnessClass} = route.params;

  const {
    handleSubmit,
    watch,
    control,
    formState: {errors},
  } = useForm({
    defaultValues: DEFAULT_FORM,
  });

  const onSubmit = () => {
    Alert.alert('Успешно', 'Вы записаны на занятие!');
  };

  const watchData = watch();

  const submitDisabled = useMemo(() => {
    const watchCopy = {...watchData};
    delete (watchCopy as any).comment;

    const input = Object.values(watchCopy);

    return input.includes('');
  }, [watchData]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          gap: 16,
          padding: '4%',
        }}>
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

        <Card>
          <Card.Title title={'Форма записи'} />
          <Card.Content style={{gap: 12}}>
            <InputArea
              id="name"
              label="имя"
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
              <InputArea
                id="date"
                label="Дата"
                required
                control={control}
                errors={errors}
              />

              <InputArea
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
              onPress={handleSubmit(onSubmit)}>
              Записаться
            </Button>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BookingScreen;
