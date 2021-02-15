import { Stock } from '../writeOff/types';

export type Product = {
  id: 24;
  region: null;
  stock: Stock;
  unit: {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: string;
  };
  name: string;
  description: string;
  article: string;
  model: string;
  price_buy: number;
  price_sale: number;
  amount: number;
  manufacturer: {
    id: number;
    name: string;
    description: string;
    photo: string;
    price: string;
  };
  method_mark: string;
  property: string;
  bonus: string;
  tax: string;
  qr: string;
};

export type InitialState = {
  products: Product[];
};
