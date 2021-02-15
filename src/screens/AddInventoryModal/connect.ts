import { connect } from 'react-redux';

import { AddInventoryController } from './controller';
import { Dispatch, RootState } from '../../store';

const mapState = ({ stock, product, loading, inventory }: RootState) => ({
  stock,
  product,
  isInventoryAddLoading: loading.effects.inventory.addInventory,
  addInventoryModalIsVisible: inventory.addInventoryModalIsVisible,
});

const mapDispatch = ({
  inventory: { addInventory, setAddInventoryModalIsVisible },
  product: { getProductList },
}: Dispatch) => ({
  addInventory,
  getProductList,
  setAddInventoryModalIsVisible,
});

export const AddInventoryConnect = connect(
  mapState,
  mapDispatch,
)(AddInventoryController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps;
