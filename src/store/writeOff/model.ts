import { createModel } from '@rematch/core';
import { RootModel } from '../models';
import { request } from '../../utils/api';
import { API } from '../../constants/API';
import { NewWriteOff, WriteOff, WriteOffDetail } from './types';
import { initialState } from './state';
import { Alert } from 'react-native';
import { formData } from '../../utils/formData';

export const writeOff = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setWriteOffList(state, writeOffs: WriteOff[]) {
      return { ...state, writeOffs };
    },
    setWriteOff(state, writeOffDetail: WriteOffDetail | null) {
      return { ...state, writeOff: writeOffDetail };
    },
    setWriteOffModalIsVisible(state, addWriteOffModalIsVisible: boolean) {
      return { ...state, addWriteOffModalIsVisible };
    },
  },
  effects: (dispatch) => ({
    async getWriteOffList() {
      try {
        const { data } = await request.get(API.GET_WRITE_OFF_LIST);
        dispatch.writeOff.setWriteOffList(data.data);
      } catch (e) {
        Alert.alert('Ощибка', 'Ошибка при подключение повторите еще раз', [
          {
            text: 'Повторть',
            onPress: () => dispatch.writeOff.getWriteOffList(),
          },
        ]);
      }
    },
    async getWriteOff(writeOffId: number) {
      try {
        dispatch.writeOff.setWriteOff(null);
        const { data } = await request.get(
          API.GET_WRITE_OFF + `?id=${writeOffId}`,
        );
        dispatch.writeOff.setWriteOff(data.data);
      } catch (e) {}
    },
    async addWriteOff(payload: NewWriteOff) {
      try {
        await request.post(API.ADD_WRITE_OFF, formData(payload));
        dispatch.writeOff.setWriteOffModalIsVisible(false);
        await dispatch.writeOff.getWriteOffList();
      } catch (e) {
        console.log(e);
      }
    },
  }),
});
