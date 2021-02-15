import { connect } from 'react-redux';

import { WriteOffDetailScreenController } from './controller';
import { Dispatch, RootState } from '../../store';
import { StackScreenProps } from '@react-navigation/stack';
import { ROUTES } from '../../constants/ROUTES';
import { WriteOffsStackParamList } from '../../navigation/StackNavigators/WriteOffsStack';

const mapState = ({ writeOff, loading }: RootState) => ({
  writeOff: writeOff.writeOff,
  isWriteOffLoading: loading.effects.writeOff.getWriteOff,
});

const mapDispatch = ({ writeOff: { getWriteOff } }: Dispatch) => ({
  getWriteOff,
});

export const WriteOffDetailScreenConnect = connect(
  mapState,
  mapDispatch,
)(WriteOffDetailScreenController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps &
  DisPatchProps &
  StackScreenProps<WriteOffsStackParamList, ROUTES.WRITE_OFF_DETAIL>;
