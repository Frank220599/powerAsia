import React, { Component } from 'react';
import { WriteOffDetailScreenView } from './view';
import { Props } from './connect';
import LoadingView from '../../components/LoadingView';

export class WriteOffDetailScreenController extends Component<Props> {
  componentDidMount() {
    const writeOffId = this.props.route.params.id;
    this.props.getWriteOff(writeOffId);
  }

  render() {
    if (this.props.isWriteOffLoading || !this.props.writeOff) {
      return <LoadingView />;
    }
    return <WriteOffDetailScreenView writeOff={this.props.writeOff} />;
  }
}
