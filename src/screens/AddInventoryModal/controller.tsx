import React, { Component } from 'react';
import { AddInventoryView } from './view';
import { Props } from './connect';
import { Modal } from 'react-native';
import moment from 'moment';

export class AddInventoryController extends Component<Props> {
  state = {
    newInventoryInfo: {
      fio: '',
      date_inventory: moment(Date.now()).format('DD.MM.YYYY'),
    },
    inventoryProducts: [{}],
  };

  componentDidMount() {
    this.props.getProductList();
  }

  addMore = () => {
    this.setState({
      inventoryProducts: [...this.state.inventoryProducts, {}],
    });
  };

  setInventoryProductField = (
    index: number,
    fieldName: string,
    value: string,
  ) => {
    const item = { ...this.state.inventoryProducts[index] };
    item[fieldName] = value;
    const newState = [...this.state.inventoryProducts];
    newState[index] = item;

    this.setState({
      inventoryProducts: newState,
    });
  };

  setFormField = (fieldName: string, value: string) => {
    this.setState({
      newInventoryInfo: {
        ...this.state.newInventoryInfo,
        [fieldName]: value,
      },
    });
  };

  addNewInventory = () => {
    this.props.addInventory({
      ...this.state.newInventoryInfo,
      products: this.state.inventoryProducts,
    });
  };

  render() {
    return (
      <Modal
        visible={this.props.addInventoryModalIsVisible}
        onRequestClose={() => this.props.setAddInventoryModalIsVisible(false)}>
        <AddInventoryView
          values={this.state.newInventoryInfo}
          isInventoryAddLoading={this.props.isInventoryAddLoading}
          addNewInventory={this.addNewInventory}
          setInventoryProductField={this.setInventoryProductField}
          setFormField={this.setFormField}
          stocks={this.props.stock.stocks}
          products={this.props.product.products}
          addMore={this.addMore}
          items={this.state.inventoryProducts}
        />
      </Modal>
    );
  }
}
