import { connect } from 'react-redux';

import { AddWriteOffModalController } from './controller';
import { Dispatch, RootState } from '../../store';

const mapState = ({
  handbooks,
  agent,
  loading,
  product,
  writeOff: { addWriteOffModalIsVisible },
}: RootState) => ({
  handbooks,
  agents: agent.agents,
  isWriteOffAddLoading: loading.effects.writeOff.addWriteOff,
  products: product.products,
  addWriteOffModalIsVisible,
});

const mapDispatch = ({
  agent: { getAgentList },
  product: { getProductList },
  writeOff: { addWriteOff, setWriteOffModalIsVisible },
}: Dispatch) => ({
  getProductList,
  getAgentList,
  addWriteOff,
  setWriteOffModalIsVisible,
});

export const AddWriteOffModalConnect = connect(
  mapState,
  mapDispatch,
)(AddWriteOffModalController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;
