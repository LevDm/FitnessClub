export interface FitnessClass {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
}

export const class1: FitnessClass[] = [
  {
    id: 1,
    name: 'Йога',
    description: 'Подходит для всех уровней подготовки.',
    duration: '60 мин',
    price: '500 руб.',
  },
  {
    id: 2,
    name: 'Персональная тренировка',
    description:
      'Персональные занятия с нашими лучшими тренерами и индивидуальным подходом к каждому клиенту!',
    duration: '45 мин',
    price: '700 руб.',
  },
  {
    id: 3,
    name: 'Танцевальная аэробика',
    description:
      'Зажигательные занятия с использованием различных танцевальных стилей.',
    duration: '60 мин',
    price: '600 руб.',
  },
  {
    id: 4,
    name: 'Пилатес',
    description:
      'Пилатес - это система упражнений для тела, направленных на укрепление мышц, улучшение гибкости и повышение осведомленности о своем теле. Пилатес помогает улучшить осанку, выровнять мышечный баланс и предотвратить травмы.',
    duration: '1 час',
    price: '800 руб.',
  },
  {
    id: 5,
    name: 'Функциональный тренинг',
    description:
      'Функциональный тренинг - это система упражнений, которые моделируют ежедневные движения человека и улучшают его функциональные способности. Этот тип тренировок помогает развивать силу, выносливость, координацию и гибкость.',
    duration: '1 час',
    price: '900 руб.',
  },
];

export type FitnessClasses = 'all' | 'cl1' | 'cl2' | 'cl3' | 'cl4';

export type FitnessCategory = {
  id: string;
  title: string;
  description?: string;
  img: any;
  classes: FitnessClasses;
};
import all_Img from '../../assets/fitness-categories/all.jpg';
import c1_Img from '../../assets/fitness-categories/c1.jpg';
import c2_Img from '../../assets/fitness-categories/c2.jpg';
import c3_Img from '../../assets/fitness-categories/c3.jpg';
import c4_Img from '../../assets/fitness-categories/c4.jpg';

export const FITNESS_CATEGORIES: FitnessCategory[] = [
  {
    id: 'cc1',
    title: 'Посмотреть все',
    img: all_Img,
    classes: 'all',
  },
  {
    id: 'cc2',
    title: '2',
    description: '02',
    img: c1_Img,
    classes: 'cl1',
  },
  {
    id: 'cc3',
    title: '3',
    description: '03',
    img: c2_Img,
    classes: 'cl2',
  },
  {
    id: 'cc4',
    title: '4',
    description: '04',
    img: c3_Img,
    classes: 'cl3',
  },
  {
    id: 'cc5',
    title: '5',
    description: '05',
    img: c4_Img,
    classes: 'cl4',
  },
];

type UseData = (
  src: 'categorys' | 'class',
  option?: FitnessClasses,
) => FitnessCategory[] | FitnessClass[];

export const useData: UseData = (src, option) => {
  switch (`${src}${option ? '-' : ''}${option ?? ''}`) {
    case 'categorys':
      return FITNESS_CATEGORIES;
    case 'class-all':
      return [...class1, ...class1];
    case 'class-cl1':
      return class1;
  }

  return [];
};
