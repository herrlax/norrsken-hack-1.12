type Product = {
  id: string;
  name: string;
  expiration: number;
};

type Dinner = {
  id: string;
  name: string;
  ingredients: Product[];
};

export { Product, Dinner };
