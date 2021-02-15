import React, { Component } from 'react';
import { WriteOffsScreenView } from './view';
import { AddWriteOffModal } from '../AddWriteOffModal';
import { Props } from './connect';
import { ROUTES } from '../../constants/ROUTES';
import LoadingView from '../../components/LoadingView';
import { PostingsScreenView } from '../PostingsScreen/view';

export class WriteOffsScreenController extends Component<Props> {
  state = {
    isRefreshing: false,
  };

  componentDidMount() {
    this.props.getWriteOffList();
  }

  navigateToWriteOffDetail = (id: number) => {
    this.props.navigation.navigate(ROUTES.WRITE_OFF_DETAIL, { id });
  };

  onRefresh = async () => {
    this.setState({ isRefreshing: true });
    await this.props.getWriteOffList();
    await this.setState({ isRefreshing: false });
  };

  render() {
    if (this.props.isWriteOffListLoading && !this.state.isRefreshing) {
      return <LoadingView />;
    }
    return (
      <>
        <WriteOffsScreenView
          writeOffs={this.props.writeOff.writeOffs}
          openModal={() => this.props.setWriteOffModalIsVisible(true)}
          navigateToWriteOffDetail={this.navigateToWriteOffDetail}
          onRefresh={{
            refreshing: this.state.isRefreshing,
            onRefresh: this.onRefresh,
          }}
        />
        <AddWriteOffModal />
      </>
    );
  }
}
