import {observable, action, computed, IObservableValue} from 'mobx';
import {
  FITNESS_CATEGORIES,
  FitnessCategory,
  FitnessClass,
  useData,
} from '../../data/fitness-classes';

type Category = Omit<FitnessCategory, 'id'>;

class ServicesStore {
  category: IObservableValue<Category> = observable.box(FITNESS_CATEGORIES[0]);

  services = computed(
    () => useData('class', this.category.get().classes) as FitnessClass[],
  );

  setCategory = action((newCategory: Category) => {
    this.category.set(newCategory);
  });

  getCategory = () => this.category.get() as FitnessCategory;
  getServices = () => this.services.get() as FitnessClass[];
}

const Store = new ServicesStore();

export default Store;
