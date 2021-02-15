import React, { Component } from 'react';
import { AddAgentModalView } from './view';
import { Props } from './connect';
import { Modal } from 'react-native';

export class AddAgentModalController extends Component<Props> {
  state = {
    type: null,
    name: null,
    code: null,
    fax: null,
    phone: null,
    email: null,
    inn: null,
    company_name: null,
    address_fact: null,
    address_law: null,
  };

  setFormField = (fieldName: string, value: any) => {
    this.setState({
      ...this.state,
      [fieldName]: value,
    });
  };

  addNewAgent = () => {
    this.props.addAgent(this.state);
  };

  render() {
    return (
      <Modal
        visible={this.props.addAgentModalIsVisible}
        onRequestClose={() => this.props.setAddAgentModalIsVisible(false)}>
        <AddAgentModalView
          isAddNewAgentLoading={this.props.isAddNewAgentLoading}
          addNewAgent={this.addNewAgent}
          setFormField={this.setFormField}
          values={this.state}
        />
      </Modal>
    );
  }
}
