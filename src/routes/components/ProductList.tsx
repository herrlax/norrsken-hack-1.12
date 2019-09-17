import React from "react";
import ProductItem from "./ProductItem";
import { Product } from "../../utils";

type Props = {
  products: Product[];
};

const dinnerListStyle = {
  padding: 0,
  width: "500px",
  listStyleType: "none"
};

const productListHeader = {
	padding: 0,
	width: "500px"
};

const ProductList = ({ products }: Props) => {
 
  return (
  	<>
    <ul style={dinnerListStyle}>
      <h3>Ingredients Purchased:</h3>
      {products.map(d => (
        <ProductItem name={d.name} expiration={d.expiration} key={d.id} />
      ))}
    </ul>
    </>
  );
};

export default ProductList;
