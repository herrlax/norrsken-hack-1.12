import React, { useEffect } from "react";
import DinnerList from "./components/DinnerList";
import { mockedDinners } from "../utils";
import useSuggestions from "../hooks/useSuggestions";

const Dinners = () => {
  const { loading, getSuggestions, suggestions } = useSuggestions();

  useEffect(() => {
    getSuggestions();
  }, [getSuggestions]);

  console.log(suggestions, loading);

  return (
    <div>
      <h2>Dinners page</h2>
      <DinnerList dinners={mockedDinners} />
    </div>
  );
};

export default Dinners;
