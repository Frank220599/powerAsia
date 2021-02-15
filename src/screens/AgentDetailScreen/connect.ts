import { connect } from 'react-redux';

import { AgentDetailScreenController } from './controller';
import { Dispatch, RootState } from '../../store';
import { StackScreenProps } from '@react-navigation/stack';
import { ROUTES } from '../../constants/ROUTES';
import { AgentsStackParamList } from '../../navigation/StackNavigators/AgentsStack';

const mapState = ({ agent, loading }: RootState) => ({
  agent: agent.agent,
  isAgentLoading: loading.effects.agent.getAgent,
});

const mapDispatch = ({ agent: { getAgent } }: Dispatch) => ({
  getAgent,
});

export const AgentDetailScreenConnect = connect(
  mapState,
  mapDispatch,
)(AgentDetailScreenController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps &
  DisPatchProps &
  StackScreenProps<AgentsStackParamList, ROUTES.AGENT_DETAIL>;
