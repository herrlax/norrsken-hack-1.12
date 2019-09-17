import React, { createContext, useMemo, useState, useEffect } from 'react';
import { Ingredient } from '../types';

interface DataContextInterface {
  ingredients: Ingredient[];
}

export const DataContext = createContext<DataContextInterface>({
  ingredients: []
});

export const API_URL = 'http://mockdataforappandstuff.com';

export const DataContextProvider: React.FC = ({ children }) => {
  const [ingredients /*, setIngredients*/] = useState<Ingredient[]>([]);

  useEffect(() => {
    async function fetchIngredients() {
      return; // TODO ACTUAL API
      /*const response = await fetch(`${API_URL}/getIngredients`).then(res =>
        res.json()
      );

      setIngredients(response);*/
    }
    fetchIngredients();
  }, []);

  const value = useMemo(
    () => ({
      ingredients
    }),
    [ingredients]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
