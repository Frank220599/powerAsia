import { createModel } from '@rematch/core';
import { RootModel } from '../models';
import { request } from '../../utils/api';
import { API } from '../../constants/API';
import { initialState } from './state';
import { Product } from './types';

export const product = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setProductList(state, products: Product[]) {
      return { ...state, products };
    },
  },
  effects: (dispatch) => ({
    async getProductList() {
      try {
        const { data } = await request.get(API.GET_PRODUCT_LIST);
        dispatch.product.setProductList(data.data);
      } catch (e) {}
    },
  }),
});
