import AsyncStorage from '@react-native-async-storage/async-storage';
import {useCallback, useState} from 'react';
import {SuccsesFormValues} from '../../components/records-form';

import {FitnessClass} from '../../data';

const STORAGE_NAME = 'user-servis-records';

export type UserRecords = SuccsesFormValues & {
  id: string;
  status?: string;
  servis: FitnessClass;
};

export const useLStorage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<UserRecords[]>([]);

  const loadStorage = useCallback(async () => {
    try {
      setIsLoading(true);

      const value = await AsyncStorage.getItem(STORAGE_NAME);
      if (value !== null) {
        const jsonValue = JSON.parse(value);
        setData(jsonValue);
      }
    } catch (e) {
      setError(e as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updStorage = useCallback(async (value: UserRecords[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_NAME, jsonValue);
      setData(value);
    } catch (e) {
      setError(e as Error);
    }
  }, []);

  return {
    loadStorage,
    updStorage,
    data,
    error,
    isLoading,
  };
};
