import React from "react";
import { Product } from '../../utils';

type Props = {
	name: string;
	expiration: number;
}

const ProductItem = ({ name, expiration }: Props) => {
	return <li>{name}, {expiration}</li>;
};

export default ProductItem;