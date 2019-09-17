import React from "react";
import ProductItem from "./ProductItem";
import { Product } from "../../utils";

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
 
  return (
    <ul>
      {products.map(d => (
        <ProductItem name={d.name} expiration={d.expiration} key={d.id} />
      ))}
    </ul>
  );
};

export default ProductList;
