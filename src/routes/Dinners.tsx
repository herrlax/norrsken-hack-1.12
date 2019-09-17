import React, { useEffect, useState } from 'react';
import DinnerList from './components/DinnerList';
import AddButton from './components/AddButton';
import ProductList from './components/ProductList';
import AddItemsDialog from './components/AddItemsDialog';
import useSuggestions from '../hooks/useSuggestions';
import { useIngredients } from '../hooks/useIngredients';
import { mockedDinners, mockedProducts } from '../utils';

const content = {
  display: 'flex'
}

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
        <div style={content}>
          <DinnerList dinners={mockedDinners} />
          <ProductList products={mockedProducts} />
          <AddItemsDialog
        isOpen={isAddDialogOpen}
        hideDialog={() => setIsAddDialogOpen(false)}
      />
      <AddButton onClick={() => setIsAddDialogOpen(true)} />
      </div>
    </div>
  );
};

export default Dinners;
