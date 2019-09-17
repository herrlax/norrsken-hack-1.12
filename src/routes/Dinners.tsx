import React, { useEffect, useState } from 'react';
import DinnerList from './components/DinnerList';
import AddButton from './components/AddButton';
import AddItemsDialog from './components/AddItemsDialog';
import useSuggestions from '../hooks/useSuggestions';

const Dinners = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { loading, getSuggestions, suggestions } = useSuggestions();

  useEffect(() => {
    getSuggestions();
  }, [getSuggestions]);
  return (
    <div>
      <h2>Dinners page</h2>
      <DinnerList dinners={suggestions} />

      <AddItemsDialog
        isOpen={isAddDialogOpen}
        hideDialog={() => setIsAddDialogOpen(false)}
      />
      <AddButton onClick={() => setIsAddDialogOpen(true)} />
    </div>
  );
};

export default Dinners;
