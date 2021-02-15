import { createModel } from '@rematch/core';
import { RootModel } from '../models';
import { request } from '../../utils/api';
import { API } from '../../constants/API';
import { initialState } from './state';
import { Handbook } from './types';

export const handbooks = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setPaymentTypes(state, paymentTypes: Handbook[]) {
      return { ...state, paymentTypes };
    },
    setCurrencies(state, currencies: Handbook[]) {
      return { ...state, currencies };
    },
    setMangers(state, managers: Handbook[]) {
      return { ...state, managers };
    },
    setProducts(state, products: Handbook[]) {
      return { ...state, products };
    },
    setWriteOffTypes(state, writeOffTypes: Handbook[]) {
      return { ...state, writeOffTypes };
    },
  },
  effects: (dispatch) => ({
    async getPaymentTypes() {
      try {
        const { data } = await request.get(API.GET_PAYMENT_TYPES);
        dispatch.handbooks.setPaymentTypes(data.data);
      } catch (e) {}
    },
    async getWriteOffTypes() {
      try {
        const { data } = await request.get(API.GET_WRITE_OFF_TYPES);
        dispatch.handbooks.setWriteOffTypes(data.data);
      } catch (e) {}
    },
    async getManagers() {
      try {
        const { data } = await request.get(API.GET_MANAGERS);
        dispatch.handbooks.setMangers(data.data);
      } catch (e) {}
    },
    async getProducts() {
      try {
        const { data } = await request.get(API.GET_PRODUCTS);
        dispatch.handbooks.setProducts(data.data);
      } catch (e) {}
    },
    async getCurrencies() {
      try {
        const { data } = await request.get(API.GET_CURRENCIES);
        dispatch.handbooks.setCurrencies(data.data);
      } catch (e) {}
    },
  }),
});
