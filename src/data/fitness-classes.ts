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
    id: 5,
    name: 'Функциональный тренинг',
    description:
      'Функциональный тренинг - это система упражнений, которые моделируют ежедневные движения человека и улучшают его функциональные способности. Этот тип тренировок помогает развивать силу, выносливость, координацию и гибкость.',
    duration: '1 час',
    price: '900 руб.',
  },
  {
    id: 14,
    name: 'Кроссфит',
    description:
      'Интенсивные функциональные тренировки для развития всех физических качеств.',
    duration: '1 час',
    price: '950 руб.',
  },
  {
    id: 20,
    name: 'Бодифлекс',
    description:
      'Комплекс упражнений для правильного дыхания и улучшения общего состояния организма.',
    duration: '30 мин',
    price: '500 руб.',
  },
];

export const class2: FitnessClass[] = [
  {
    id: 2,
    name: 'Персональная тренировка',
    description:
      'Персональные занятия с нашими лучшими тренерами и индивидуальным подходом к каждому клиенту!',
    duration: '45 мин',
    price: '700 руб.',
  },
  {
    id: 6,
    name: 'Силовые тренировки',
    description: 'Тренировки на набор мышечной массы и укрепление тела.',
    duration: '45 мин',
    price: '700 руб.',
  },
  {
    id: 8,
    name: 'Аэробика',
    description:
      'Динамичные занятия для сжигания лишних калорий и улучшения выносливости.',
    duration: '45 мин',
    price: '600 руб.',
  },
  {
    id: 11,
    name: 'Хатха-йога',
    description: 'Классический стиль йоги для гармонии тела и души.',
    duration: '75 мин',
    price: '550 руб.',
  },
];

export const class3: FitnessClass[] = [
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
    id: 12,
    name: 'Стретчинг',
    description: 'Растяжка для улучшения гибкости и профилактики травм.',
    duration: '30 мин',
    price: '400 руб.',
  },
  {
    id: 13,
    name: 'Zumba',
    description:
      'Энергичные танцевальные тренировки под латиноамериканскую музыку.',
    duration: '60 мин',
    price: '650 руб.',
  },
  {
    id: 15,
    name: 'Пилонг',
    description:
      'Тренировки на пилонге для укрепления мышц и улучшения координации.',
    duration: '45 мин',
    price: '700 руб.',
  },
  {
    id: 18,
    name: 'Спортивный йога',
    description: 'Интенсивные занятия по йоге с элементами силовых упражнений.',
    duration: '1 час',
    price: '750 руб.',
  },
  {
    id: 7,
    name: 'Кардио-тренировки',
    description:
      'Интенсивные тренировки для улучшения сердечно-сосудистой системы.',
    duration: '30 мин',
    price: '550 руб.',
  },
  {
    id: 19,
    name: 'Танцевальная аэробика',
    description:
      'Тренировки, сочетающие элементы танцев и аэробики для улучшения фигуры.',
    duration: '45 мин',
    price: '650 руб.',
  },
];

export const class4: FitnessClass[] = [
  {
    id: 9,
    name: 'Бокс',
    description:
      'Тренировки по боксу для развития силы, скорости и выносливости.',
    duration: '1 час',
    price: '800 руб.',
  },
  {
    id: 10,
    name: 'Кикбоксинг',
    description:
      'Уроки по кикбоксингу для освоения техник ударов ногами и руками.',
    duration: '1 час',
    price: '850 руб.',
  },
  {
    id: 16,
    name: 'Тай-бо',
    description:
      'Комбинированные тренировки, включающие элементы бокса, карате и аэробики.',
    duration: '1 час',
    price: '800 руб.',
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
    title: 'Групповые',
    img: c1_Img,
    classes: 'cl1',
  },
  {
    id: 'cc3',
    title: 'Персональные',
    img: c2_Img,
    classes: 'cl2',
  },
  {
    id: 'cc4',
    title: 'Кардио',
    img: c3_Img,
    classes: 'cl3',
  },
  {
    id: 'cc5',
    title: 'Боевые искусства',
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
      return [...class1, ...class2, ...class3, ...class4];
    case 'class-cl1':
      return class1;
    case 'class-cl2':
      return class2;
    case 'class-cl3':
      return class3;
    case 'class-cl4':
      return class4;
  }

  return [];
};
