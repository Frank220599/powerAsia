import React, { Component } from 'react';
import { InventoryScreenView } from './view';
import { AddInventory } from '../AddInventoryModal';
import { Props } from './connect';
import LoadingView from '../../components/LoadingView';
import { ROUTES } from '../../constants/ROUTES';

export class InventoryScreenController extends Component<Props> {
  state = {
    isRefreshing: false,
  };

  componentDidMount() {
    this.props.getInventoryList();
  }

  navigateToInventoryDetail = (id: number) => {
    this.props.navigation.navigate(ROUTES.INVENTORY_DETAIL, { id });
  };

  onRefresh = async () => {
    this.setState({ isRefreshing: true });
    await this.props.getInventoryList();
    await this.setState({ isRefreshing: false });
  };

  render() {
    if (this.props.isInventoryLoading && !this.state.isRefreshing) {
      return <LoadingView />;
    }
    return (
      <>
        <InventoryScreenView
          navigateToInventoryDetail={this.navigateToInventoryDetail}
          inventories={this.props.inventory.inventories}
          openModal={() => this.props.setAddInventoryModalIsVisible(true)}
          onRefresh={{
            refreshing: this.state.isRefreshing,
            onRefresh: this.onRefresh,
          }}
        />
        <AddInventory />
      </>
    );
  }
}
