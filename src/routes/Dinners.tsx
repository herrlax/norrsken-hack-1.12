import React from "react";
import DinnerList from "./components/DinnerList";
import { mockedDinners } from "../utils";

const Dinners = () => {
  return (
    <div>
      <h2>Dinners page</h2>
      <DinnerList dinners={mockedDinners} />
    </div>
  );
};

export default Dinners;
