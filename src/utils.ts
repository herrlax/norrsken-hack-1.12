export type Product = {
  id: string;
  name: string;
  expiration: number;
};

export type Dinner = {
  id: string;
  name: string;
  ingredients: Product[];
};

export type Provider = {
  id: string;
  name: string;
  logo: string;
};

const flour = {
  id: 'test-product-1',
  name: 'All purpose flour',
  expiration: 0
};
const milk = { id: 'test-product-2', name: 'Milk', expiration: 0 };
const egg = { id: 'test-product-3', name: 'Egg', expiration: 0 };

export const mockedDinners = [
  {
    id: 'test-dinner-1',
    name: 'Pancake',
    ingredients: [flour, milk, egg, egg]
  },
  { id: 'test-dinner-2', name: 'Omelette', ingredients: [egg, egg, egg, egg] },
  { id: 'test-dinner-3', name: 'Milk soup', ingredients: [milk, milk, milk] }
];

export const mockedProducts = [
  egg, milk, flour
];
