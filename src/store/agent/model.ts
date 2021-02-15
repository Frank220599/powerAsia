import { createModel } from '@rematch/core';
import { RootModel } from '../models';
import { request } from '../../utils/api';
import { API } from '../../constants/API';
import { Agent, NewAgent } from './types';
import { initialState } from './state';

export const agent = createModel<RootModel>()({
  state: initialState,
  reducers: {
    setAgentList(state, agents: Agent[]) {
      return { ...state, agents };
    },
    setAgent(state, agentDetail: Agent | null) {
      return { ...state, agent: agentDetail };
    },
    setAddAgentModalIsVisible(state, addAgentModalIsVisible: boolean) {
      return { ...state, addAgentModalIsVisible };
    },
  },
  effects: (dispatch) => ({
    async getAgentList() {
      try {
        const { data } = await request.get(API.GET_AGENT_LIST);
        dispatch.agent.setAgentList(data.data);
      } catch (e) {}
    },
    async getAgent(agentId: number) {
      try {
        dispatch.agent.setAgent(null);
        const { data } = await request.get(API.GET_AGENT + `?id=${agentId}`);
        dispatch.agent.setAgent(data.data);
      } catch (e) {}
    },
    async addAgent(payload: NewAgent) {
      try {
        await request.post(API.ADD_AGENT, payload);
        dispatch.agent.setAddAgentModalIsVisible(false);
        await dispatch.agent.getAgentList();
      } catch (e) {}
    },
  }),
});
