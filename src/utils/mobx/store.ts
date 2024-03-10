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
  seachText: IObservableValue<string> = observable.box('');

  services = computed(
    () => useData('class', this.category.get().classes) as FitnessClass[],
  );

  setCategory = action((newCategory: Category) => {
    this.category.set(newCategory);
  });

  getCategory = () => this.category.get() as FitnessCategory;
  getServices = () => this.services.get() as FitnessClass[];

  setSeachText = action((value: string) => {
    this.seachText.set(value);
  });

  filtredServices = computed(() => {
    const source = this.services.get();
    const term = this.seachText.get();
    if (term === '') return source;

    const res = (() => {
      const escapedTerm = term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(escapedTerm.replace(/.{1,2}/g, '$&.?'), 'i');
      return source.filter(service => regex.test(service.name));
    })();

    return res;
  });

  getFiltredServices = () => this.filtredServices.get();
}

const Store = new ServicesStore();

export default Store;
