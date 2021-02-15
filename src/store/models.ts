import { Models } from '@rematch/core';
import { inventory } from './inventory';
import { posting } from './posting';
import { writeOff } from './writeOff';
import { agent } from './agent';
import { stock } from './stock';
import { product } from './product';
import { handbooks } from './handbooks';

export interface RootModel extends Models<RootModel> {
  inventory: typeof inventory;
  posting: typeof posting;
  writeOff: typeof writeOff;
  agent: typeof agent;
  stock: typeof stock;
  product: typeof product;
  handbooks: typeof handbooks;
}

export const models: RootModel = {
  inventory,
  posting,
  writeOff,
  agent,
  stock,
  product,
  handbooks,
};
