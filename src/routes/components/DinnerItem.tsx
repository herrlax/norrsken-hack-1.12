import React from "react";
import { Product } from "../../utils";

type Props = {
  name: string;
  ingredients: Product[];
};

const itemsStyles = {
  marginBottom: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  listStyleType: "none",
  height: "50px",
  background: "rgba(0,0,0,0.3)",
  borderRadius: "3px"
};

const DinnerItem = ({ name, ingredients }: Props) => {
  return <li style={itemsStyles}>{name}</li>;
};

export default DinnerItem;
