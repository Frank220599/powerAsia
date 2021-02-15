import React, { Component } from 'react';
import { AgentDetailScreenView } from './view';
import { Props } from './connect';
import LoadingView from '../../components/LoadingView';

export class AgentDetailScreenController extends Component<Props> {
  componentDidMount() {
    const agentId = this.props.route.params.id;
    this.props.getAgent(agentId);
  }

  render() {
    if (this.props.isAgentLoading || !this.props.agent) {
      return <LoadingView />;
    }
    return <AgentDetailScreenView agent={this.props.agent} />;
  }
}
