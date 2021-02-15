import { Agent } from '../agent/types';
import { Product } from '../product/types';

export type WriteOff = {
  id: number;
  stock: Stock;
  agent: Agent;
  manager: Manager;
  currency: Currency | null;
  payment: Payment;
  writeoffType: WriteOffType;
  fio: string;
  date_writeoff: string;
  comment: string;
  percentage: number;
  status: number;
  date: string;
};

export type Currency = {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
};

export type Payment = {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
};

export type WriteOffType = {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
};

export type Stock = {
  id: number;
  code: string;
  name: string;
  description: string;
  address: string;
  lat: string;
  lng: string;
};

export type Manager = {
  id: number;
  name: string;
  lastname: string;
  fname: string;
  phone: string;
  email: string;
  status: number;
  sort: number;
  date: string;
  ip: string;
};

export type WriteOffProduct = {
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

export type NewWriteOffProduct = {
  product: number;
  amount: number;
};

export type NewWriteOff = {
  stock_id: number;
  agent_id: number;
  type_id: number;
  fio: string;
  date_writeoff: string;
  percentage: number;
  currency_id: number;
  payment_id: number;
  manager_id: number;
  comment: string;
  products: NewWriteOffProduct[];
};

export interface WriteOffDetail extends WriteOff {
  writeoffProducts: WriteOffProduct[];
}

export type InitialState = {
  writeOffs: WriteOff[];
  writeOff: WriteOffDetail | null;
  addWriteOffModalIsVisible: boolean;
};
