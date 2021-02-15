import { Stock } from '../writeOff/types';
import { Product } from '../product/types';

export type Inventory = {
  id: number;
  fio: string;
  date_inventory: string;
  status: number;
  data: Date;
};

export type NewInventory = {
  fio: string;
  date_inventory: string;
  products: NewInventoryProduct[];
};

type NewInventoryProduct = {
  product: number;
  price: number;
  amount: number;
  stock_id: number;
  stack_id: number;
  shelf_id: number;
};

export type InventoryProduct = {
  id: number;
  product: Product | null;
  currency: string;
  stock: Stock | null;
  stack_id: number;
  shelf_id: number;
  price: number;
  price_total: number;
  amount: number;
};

export interface InventoryDetail extends Inventory {
  stock: Stock;
  inventoryProducts: InventoryProduct[];
}

export type InitialState = {
  inventories: Inventory[];
  inventory: InventoryDetail | null;
  addInventoryModalIsVisible: boolean;
};
