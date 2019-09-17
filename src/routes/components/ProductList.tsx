import React, { useState } from "react";
import ProductItem from "./ProductItem";
import { Product } from "../../utils";
import ProductDialog from "./ProductDialog";

type Props = {
  products: Product[];
};

const dinnerListStyle = {
  padding: 0,
  width: "500px",
  listStyleType: "none"
};

const dinnerListHeader = {
	paddingBottom: 5,
};

const dinnerListContent = {
	
};

const productListHeader = {
	padding: 0,
	width: "500px"
};

const ProductList = ({ products }: Props) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const showProductInfo = (product: Product) => {
    setProduct(product);
    setDialogIsOpen(true);
  };

  if (products.length < 1) {
    return (
      <h3>No products found. Try adding a product using the button below!</h3>
    );
  }

  return (
    <>
      <ul>
        {products.map(d => (
          <ProductItem
            name={d.name}
            expiration={d.expiration}
            key={d.id}
            onClick={() => showProductInfo(d)}
          />
        ))}
      </ul>
      <ProductDialog
        isOpen={dialogIsOpen}
        hideDialog={() => setDialogIsOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductList;
