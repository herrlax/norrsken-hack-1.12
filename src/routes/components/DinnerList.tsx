import React from "react";
import { Dinner } from "../../utils";
import DinnerItem from "./DinnerItem";

type Props = {
  dinners: Dinner[];
};

const DinnerList = ({ dinners }: Props) => {
  if (dinners.length < 1) {
    return <h3>No dinners found :(</h3>;
  }

  return (
    <ul>
      {dinners.map(d => (
        <DinnerItem name={d.name} ingredients={d.ingredients} key={d.id} />
      ))}
    </ul>
  );
};

export default DinnerList;
