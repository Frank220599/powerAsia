import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import { PostingsScreenController } from './controller';
import { Dispatch, RootState } from '../../store';

const mapState = ({ posting, loading }: RootState) => ({
  posting,
  isPostingListLoading: loading.effects.posting.getPostingList,
});

const mapDispatch = ({ posting: { getPostingList } }: Dispatch) => ({
  getPostingList,
});

export const PostingsScreenConnect = connect(
  mapState,
  mapDispatch,
)(PostingsScreenController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps & DisPatchProps & StackScreenProps<any>;
