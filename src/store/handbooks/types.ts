export type Handbook = {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
};

export type InitialState = {
  paymentTypes: Handbook[];
  currencies: Handbook[];
  writeOffTypes: Handbook[];
  products: Handbook[];
  managers: Handbook[];
};
