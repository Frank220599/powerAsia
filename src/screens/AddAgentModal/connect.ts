import { connect } from 'react-redux';

import { AddAgentModalController } from './controller';
import { Dispatch, RootState } from '../../store';

const mapState = ({ loading, agent }: RootState) => ({
  isAddNewAgentLoading: loading.effects.agent.addAgent,
  addAgentModalIsVisible: agent.addAgentModalIsVisible,
});

const mapDispatch = ({
  agent: { addAgent, setAddAgentModalIsVisible },
}: Dispatch) => ({
  addAgent,
  setAddAgentModalIsVisible,
});

export const AddAgentModalConnect = connect(
  mapState,
  mapDispatch,
)(AddAgentModalController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;
