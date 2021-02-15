import React, { Component } from 'react';

import { AgentsScreenView } from './view';
import { AddAgentModal } from '../AddAgentModal';
import { Props } from './connect';
import LoadingView from '../../components/LoadingView';
import { ROUTES } from '../../constants/ROUTES';

export class AgentsScreenController extends Component<Props> {
  state = {
    isRefreshing: false,
  };

  componentDidMount() {
    this.props.getAgentList();
  }

  navigateToAgentDetail = (id: number) => {
    this.props.navigation.navigate(ROUTES.AGENT_DETAIL, { id });
  };

  onRefresh = async () => {
    this.setState({ isRefreshing: true });
    await this.props.getAgentList();
    await this.setState({ isRefreshing: false });
  };

  render() {
    if (this.props.isAgentListLoading && !this.state.isRefreshing) {
      return <LoadingView />;
    }
    return (
      <>
        <AgentsScreenView
          agents={this.props.agent.agents}
          openModal={() => this.props.setAddAgentModalIsVisible(true)}
          navigateToAgentDetail={this.navigateToAgentDetail}
          onRefresh={{
            refreshing: this.state.isRefreshing,
            onRefresh: this.onRefresh,
          }}
        />
        <AddAgentModal />
      </>
    );
  }
}
