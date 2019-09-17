export type Product = {
  id: string;
  name: string;
  expiration: number;
  info?: string;
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
  id: "test-product-1",
  name: "All purpose flour",
  expiration: 0,
  info: "If your flour has bugs in it. You should probably not eat it."
};
const milk = {
  id: "test-product-2",
  name: "Milk",
  expiration: 0,
  info:
    "Milk should be stored in a cool place. Does it smell bad? No? Then drink it!"
};
const egg = {
  id: "test-product-3",
  name: "Egg",
  expiration: 0,
  info:
    "If you put an egg in a glass of water and it floats, it have turned bad"
};

export const mockedDinners = [
  {
    id: "test-dinner-1",
    name: "Pancake",
    ingredients: [flour, milk, egg, egg]
  },
  { id: "test-dinner-2", name: "Omelette", ingredients: [egg, egg, egg, egg] },
  { id: "test-dinner-3", name: "Milk soup", ingredients: [milk, milk, milk] }
];

export const mockedProducts = [egg, milk, flour];
