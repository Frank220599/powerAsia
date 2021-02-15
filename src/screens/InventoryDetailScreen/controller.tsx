import React, { Component } from 'react';
import { InventoryDetailScreenView } from './view';
import { Props } from './connect';
import LoadingView from '../../components/LoadingView';

export class InventoryDetailScreenController extends Component<Props> {
  componentDidMount() {
    const inventoryId = this.props.route.params.id;
    this.props.getInventory(inventoryId);
  }

  render() {
    if (this.props.isInventoryLoading || !this.props.inventory) {
      return <LoadingView />;
    }
    return <InventoryDetailScreenView inventory={this.props.inventory} />;
  }
}
