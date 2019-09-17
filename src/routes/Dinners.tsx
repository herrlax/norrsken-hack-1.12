import React, { useEffect, useState } from 'react';
import DinnerList from './components/DinnerList';
import AddButton from './components/AddButton';
import ProductList from './components/ProductList';
import AddItemsDialog from './components/AddItemsDialog';
import useSuggestions from '../hooks/useSuggestions';
import { useIngredients } from '../hooks/useIngredients';

const Dinners = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { ingredients } = useIngredients();
  const { loading, getSuggestions, suggestions } = useSuggestions();

  useEffect(() => {
    getSuggestions();
  }, [getSuggestions]);
  return (
    <div>
      <h2>Your Expyro 🐉</h2>
      <DinnerList dinners={mockedDinners} />
      <ProductList products={mockedProducts} />
      <AddItemsDialog
        isOpen={isAddDialogOpen}
        hideDialog={() => setIsAddDialogOpen(false)}
      />
      <AddButton onClick={() => setIsAddDialogOpen(true)} />
    </div>
  );
};

export default Dinners;
