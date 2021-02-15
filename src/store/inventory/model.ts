import { createModel } from '@rematch/core';
import { RootModel } from '../models';
import { request } from '../../utils/api';
import { API } from '../../constants/API';
import { Inventory, InventoryDetail, NewInventory } from './types';
import { initialState } from './state';
import { formData } from '../../utils/formData';

export const inventory = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setInventoryList(state, inventories: Inventory[]) {
      return { ...state, inventories };
    },
    setInventory(state, inventoryDetail: InventoryDetail | null) {
      return { ...state, inventory: inventoryDetail };
    },
    setAddInventoryModalIsVisible(state, addInventoryModalIsVisible: boolean) {
      return { ...state, addInventoryModalIsVisible };
    },
  },
  effects: (dispatch) => ({
    async getInventoryList() {
      try {
        const { data } = await request.get(API.GET_INVENTORY_LIST);
        dispatch.inventory.setInventoryList(data.data);
      } catch (e) {}
    },
    async addInventory(payload: NewInventory) {
      try {
        await request.post(API.ADD_INVENTORY, formData(payload));
        dispatch.inventory.setAddInventoryModalIsVisible(false);
        await dispatch.inventory.getInventoryList();
      } catch (e) {}
    },
    async getInventory(agentId: number) {
      try {
        dispatch.inventory.setInventory(null);
        const { data } = await request.get(
          API.GET_INVENTORY + `?id=${agentId}`,
        );
        dispatch.inventory.setInventory(data.data);
      } catch (e) {}
    },
  }),
});
