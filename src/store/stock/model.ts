import { createModel } from '@rematch/core';
import { RootModel } from '../models';
import { request } from '../../utils/api';
import { API } from '../../constants/API';
import { initialState } from './state';
import { Stock } from '../writeOff/types';

export const stock = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setStockList(state, stocks: Stock[]) {
      return { ...state, stocks };
    },
  },
  effects: (dispatch) => ({
    async getStockList() {
      try {
        const { data } = await request.get(API.GET_STOCK_LIST);
        dispatch.stock.setStockList(data.data);
      } catch (e) {}
    },
  }),
});
