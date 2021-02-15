import { connect } from 'react-redux';

import { WriteOffsScreenController } from './controller';
import { Dispatch, RootState } from '../../store';
import { StackScreenProps } from '@react-navigation/stack';

const mapState = ({ writeOff, loading }: RootState) => ({
  writeOff,
  isWriteOffListLoading: loading.effects.writeOff.getWriteOffList,
});

const mapDispatch = ({
  writeOff: { getWriteOffList, setWriteOffModalIsVisible },
}: Dispatch) => ({
  getWriteOffList,
  setWriteOffModalIsVisible,
});

export const WriteOffsScreenConnect = connect(
  mapState,
  mapDispatch,
)(WriteOffsScreenController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & StackScreenProps<any>;
