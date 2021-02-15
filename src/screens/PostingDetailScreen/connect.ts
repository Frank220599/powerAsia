import { connect } from 'react-redux';

import { PostingsDetailScreenController } from './controller';
import { Dispatch, RootState } from '../../store';
import { StackScreenProps } from '@react-navigation/stack';
import { PostingsStackParamList } from '../../navigation/StackNavigators/PostingsStack';
import { ROUTES } from '../../constants/ROUTES';

const mapState = ({
  posting,
  loading,
  stock: { stocks },
  product: { products },
}: RootState) => ({
  posting: posting.posting,
  isPostingListLoading: loading.effects.posting.getPosting,
  products,
  stocks,
});

const mapDispatch = ({ posting: { getPosting, updatePosting } }: Dispatch) => ({
  getPosting,
  updatePosting,
});

export const PostingsDetailScreenConnect = connect(
  mapState,
  mapDispatch,
)(PostingsDetailScreenController);

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = StateProps &
  DisPatchProps &
  StackScreenProps<PostingsStackParamList, ROUTES.POSTING_DETAIL>;
