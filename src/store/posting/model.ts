import { createModel } from '@rematch/core';
import { RootModel } from '../models';
import { request } from '../../utils/api';
import { API } from '../../constants/API';
import { Posting, PostingDetail, UpdatedPosting } from './types';
import { initialState } from './state';
import { formData } from '../../utils/formData';

export const posting = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setPostingList(state, postings: Posting[]) {
      return { ...state, postings };
    },
    setPosting(state, postingDetail: PostingDetail | null) {
      return { ...state, posting: postingDetail };
    },
  },
  effects: (dispatch) => ({
    async getPostingList() {
      try {
        const { data } = await request.get(API.GET_POSTING_LIST);
        dispatch.posting.setPostingList(data.data);
      } catch (e) {}
    },
    async getPosting(postingId: number) {
      try {
        dispatch.posting.setPosting(null);
        const { data } = await request.get(
          API.GET_POSTING + `?id=${postingId}`,
        );
        dispatch.posting.setPosting(data.data);
      } catch (e) {}
    },
    async updatePosting(payload: UpdatedPosting) {
      try {
        await request.post(API.ADD_POSTING, formData(payload));
        await dispatch.posting.getPostingList();
      } catch (e) {}
    },
  }),
});
