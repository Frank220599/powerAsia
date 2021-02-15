import React, { Component } from 'react';
import { PostingsScreenView } from './view';
import { Props } from './connect';
import LoadingView from '../../components/LoadingView';
import { ROUTES } from '../../constants/ROUTES';


export class PostingsScreenController extends Component<Props> {
  state = {
    isRefreshing: false,
  };

  componentDidMount() {
    this.props.getPostingList();
  }

  navigateToPostingDetail = (id: number) => {
    this.props.navigation.navigate(ROUTES.POSTING_DETAIL, { id });
  };

  onRefresh = async () => {
    this.setState({ isRefreshing: true });
    await this.props.getPostingList();
    await this.setState({ isRefreshing: false });
  };

  render() {
    if (this.props.isPostingListLoading && !this.state.isRefreshing) {
      return <LoadingView />;
    }
    return (
      <PostingsScreenView
        navigateToPostingDetail={this.navigateToPostingDetail}
        posting={this.props.posting.postings}
        onRefresh={{
          refreshing: this.state.isRefreshing,
          onRefresh: this.onRefresh,
        }}
      />
    );
  }
}
