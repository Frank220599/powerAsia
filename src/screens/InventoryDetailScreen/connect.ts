import { connect } from 'react-redux';

import { InventoryDetailScreenController } from './controller';
import { Dispatch, RootState } from '../../store';
import { StackScreenProps } from '@react-navigation/stack';
import { ROUTES } from '../../constants/ROUTES';
import { InventoryStackParamList } from '../../navigation/StackNavigators/InventoryStack';

const mapState = ({ inventory, loading }: RootState) => ({
  inventory: inventory.inventory,
  isInventoryLoading: loading.effects.inventory.getInventory,
});

const mapDispatch = ({ inventory: { getInventory } }: Dispatch) => ({
  getInventory,
});

export const InventoryDetailScreenConnect = connect(
  mapState,
  mapDispatch,
)(InventoryDetailScreenController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps &
  DisPatchProps &
  StackScreenProps<InventoryStackParamList, ROUTES.INVENTORY_DETAIL>;
