import { connect } from 'react-redux';

import { InventoryScreenController } from './controller';
import { Dispatch, RootState } from '../../store';
import { StackScreenProps } from '@react-navigation/stack';

const mapState = ({ inventory, loading }: RootState) => ({
  inventory,
  isInventoryLoading: loading.effects.inventory.getInventoryList,
});

const mapDispatch = ({
  inventory: { getInventoryList, setAddInventoryModalIsVisible },
}: Dispatch) => ({
  getInventoryList,
  setAddInventoryModalIsVisible,
});

export const InventoryScreenConnect = connect(
  mapState,
  mapDispatch,
)(InventoryScreenController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & StackScreenProps<any>;
