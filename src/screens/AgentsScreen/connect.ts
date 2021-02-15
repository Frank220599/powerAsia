import { connect } from 'react-redux';

import { AgentsScreenController } from './controller';
import { Dispatch, RootState } from '../../store';
import { StackScreenProps } from '@react-navigation/stack';

const mapState = ({ agent, loading }: RootState) => ({
  agent,
  isAgentListLoading: loading.effects.agent.getAgentList,
});

const mapDispatch = ({
  agent: { getAgentList, setAddAgentModalIsVisible },
}: Dispatch) => ({
  getAgentList,
  setAddAgentModalIsVisible,
});

export const AgentsScreenConnect = connect(
  mapState,
  mapDispatch,
)(AgentsScreenController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & StackScreenProps<any>;
