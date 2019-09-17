import React, { useEffect } from "react";
import DinnerList from "./components/DinnerList";
import ProductList from "./components/ProductList";
import { mockedDinners, mockedProducts } from "../utils";
import useSuggestions from "../hooks/useSuggestions";

const Dinners = () => {
  const { loading, getSuggestions, suggestions } = useSuggestions();

  useEffect(() => {
    getSuggestions();
  }, [getSuggestions]);

  return (
    <div>
      <h2>Your Expyro 🐉</h2>
      <DinnerList dinners={mockedDinners} />
      <ProductList products={mockedProducts} />
    </div>
  );
};

export default Dinners;
