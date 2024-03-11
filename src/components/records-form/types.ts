import {FieldErrors} from 'react-hook-form';

export type IdsForm = 'name' | 'phone' | 'date' | 'time' | 'comment';

export type FormValues = Record<IdsForm, string>;

export type InputAreaProps = {
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

export type InputProps = InputAreaProps & {
  field: {
    onChange: (t: string) => void;
    value: string;
  };
};

export type SuccsesFormValues = {
  name: string;
  phone: string;
  date: string;
  comment: string;
};
