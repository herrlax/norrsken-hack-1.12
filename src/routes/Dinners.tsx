import React, { useEffect } from "react";
import DinnerList from "./components/DinnerList";
import ProductList from "./components/ProductList";
import { mockedDinners, mockedProducts } from "../utils";
import useSuggestions from "../hooks/useSuggestions";

const content = {
  display: 'flex'
}

const Dinners = () => {
  const { loading, getSuggestions, suggestions } = useSuggestions();

  useEffect(() => {
    getSuggestions();
  }, [getSuggestions]);

  return (
    <div>
      <h2>Dinners page</h2>
        <div style={content}>
          <DinnerList dinners={mockedDinners} />
          <ProductList products={mockedProducts} />
        </div>
    </div>
  );
};

export default Dinners;
