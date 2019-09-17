import React from "react";
import { Product } from "../../utils";

type Props = {
  name: string;
  ingredients: Product[];
};

const DinnerItem = ({ name, ingredients }: Props) => {
  return <li>{name}</li>;
};

export default DinnerItem;
