import React, { Component } from 'react';
import { AddWriteOffModalView } from './view';
import { Props } from './connect';
import { NewWriteOffProduct } from '../../store/writeOff/types';
import { Modal } from 'react-native';
import moment from 'moment';

export class AddWriteOffModalController extends Component<Props> {
  state = {
    newWriteOffInfo: {
      stock_id: null,
      agent_id: null,
      type_id: null,
      fio: null,
      date_writeoff: moment(Date.now()).format('DD.MM.YYYY'),
      percentage: null,
      currency_id: null,
      payment_id: null,
      manager_id: null,
      comment: null,
    },
    writeOffProducts: [{}],
  };

  componentDidMount() {
    this.props.getProductList();
    this.props.getAgentList();
  }

  addMore = () => {
    this.setState({
      writeOffProducts: [...this.state.writeOffProducts, {}],
    });
  };

  setWriteOffProductField = (
    index: number,
    fieldName: string,
    value: string,
  ) => {
    const item = { ...this.state.writeOffProducts[index] };
    item[fieldName] = value;
    const newState = [...this.state.writeOffProducts];
    newState[index] = item;

    this.setState({
      writeOffProducts: newState,
    });
  };

  setFormField = (fieldName: string, value: string) => {
    this.setState({
      newWriteOffInfo: {
        ...this.state.newWriteOffInfo,
        [fieldName]: value,
      },
    });
  };

  addNewWriteOff = () => {
    this.props.addWriteOff({
      ...this.state.newWriteOffInfo,
      products: this.state.writeOffProducts as NewWriteOffProduct[],
    });
  };

  render() {
    const {
      writeOffTypes,
      paymentTypes,
      managers,
      currencies,
    } = this.props.handbooks;
    return (
      <Modal
        visible={this.props.addWriteOffModalIsVisible}
        onRequestClose={() => this.props.setWriteOffModalIsVisible(false)}>
        <AddWriteOffModalView
          values={this.state.newWriteOffInfo}
          addNewWriteOff={this.addNewWriteOff}
          setWriteOffProductField={this.setWriteOffProductField}
          setFormField={this.setFormField}
          isWriteOffAddLoading={this.props.isWriteOffAddLoading}
          agents={this.props.agents}
          writeOffTypes={writeOffTypes}
          paymentTypes={paymentTypes}
          managers={managers}
          currencies={currencies}
          products={this.props.products}
          addMore={this.addMore}
          items={this.state.writeOffProducts}
        />
      </Modal>
    );
  }
}
