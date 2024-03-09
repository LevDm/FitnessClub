export interface FitnessClass {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
}

export const fitnessClasses: FitnessClass[] = [
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
