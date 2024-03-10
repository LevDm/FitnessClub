import React, {ReactElement} from 'react';
import Store from './store';

export const StoreContext = React.createContext(Store);

export const StoreProvider = ({children}: {children: ReactElement}) => {
  return (
    <StoreContext.Provider value={Store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(StoreContext);

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return store;
};
