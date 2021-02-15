import { Currency, Stock } from '../writeOff/types';
import { Product } from '../product/types';

export type Posting = {
  id: number;
  stock: Stock;
  date_coming: string;
  theme: string;
  type: string;
  payment_condition: string;
  comment: string;
  code_ved: string;
  tracking: string;
  status: number;
  date: string;
};

export type UpdatedPosting = {
  coming_id: number;
  stock_id: number;
  theme: string;
  date_coming: string;
  payment_condition: string;
  comment: string;
  type: string;
  tracking: string;
  code_ved: number;
  products: Product[];
};

export type ComingProduct = {
  id: number;
  product: Product | null;
  currency: Currency | null;
  stock: Stock | null;
  stack_id: number;
  shelf_id: number;
  price: number;
  price_total: number;
  amount: number;
};

export type PostingDetail = {
  id: number;
  stock: Stock;
  date_coming: string;
  theme: string;
  type: string;
  payment_condition: string;
  comment: string;
  code_ved: string;
  tracking: string;
  status: number;
  date: string;
  comingProducts: ComingProduct[];
};

export type InitialState = {
  postings: Posting[];
  posting: PostingDetail | null;
};
