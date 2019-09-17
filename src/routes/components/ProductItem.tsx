import React from "react";

type Props = {
  name: string;
  expiration: number;
  onClick(): void;
};

const ProductItem = ({ name, expiration, onClick }: Props) => {
  return (
    <li onClick={onClick}>
      {name}, {expiration}
    </li>
  );
};

export default ProductItem;
