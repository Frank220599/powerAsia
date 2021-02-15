import React, { Component } from 'react';
import { PostingsDetailScreenView } from './view';
import { Props } from './connect';
import moment from 'moment';
import LoadingView from '../../components/LoadingView';
import { UpdatedPosting } from '../../store/posting/types';
import { ScanScreen } from '../ScanScreen/ScanScreen';

export class PostingsDetailScreenController extends Component<Props> {
  state = {
    visible: false,
    search: '',
  };

  componentDidMount() {
    const { route, getPosting } = this.props;
    const postingId = route.params.id;
    getPosting(postingId);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    const { posting } = this.props;
    if (prevProps.posting?.id !== posting?.id) {
      this.setState({
        coming_id: posting?.id,
        stock_id: posting?.stock?.id,
        theme: posting?.theme,
        date_coming:
          posting?.date_coming ?? moment(Date.now()).format('DD.MM.YYYY'),
        payment_condition: posting?.payment_condition,
        comment: posting?.comment,
        type: posting?.type,
        tracking: posting?.tracking,
        code_ved: posting?.code_ved,
        products: posting?.comingProducts.map((item) => ({
          name: item.product?.name,
          product: item.product?.id ?? null,
          stock: item.stock?.id ?? null,
        })),
      });
    }
  }

  setPostingProductField = (
    index: number,
    fieldName: string,
    value: string,
  ) => {
    const item = { ...this.state.products[index] };
    // @ts-ignore
    item[fieldName] = value;
    const newState = [...this.state.products];
    newState[index] = item;

    this.setState({
      products: newState,
    });
  };

  updatePosting = () => {
    this.props.updatePosting(this.state as UpdatedPosting);
  };

  onSuccess = (e: any) => {
    this.setState({
      search: e.data,
      visible: false,
    });
  };

  toggleScan = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  setSearch = (search: string) => {
    ``;
    this.setState({
      search,
    });
  };

  render() {
    if (this.props.isPostingListLoading || !this.props.posting) {
      return <LoadingView />;
    }
    return (
      <>
        <ScanScreen
          toggleModal={this.toggleScan}
          visible={this.state.visible}
          onSuccess={this.onSuccess}
        />
        <PostingsDetailScreenView
          setSearch={this.setSearch}
          scan={this.toggleScan}
          stocks={this.props.stocks}
          posting={this.props.posting}
          products={this.props.products}
          updatePosting={this.updatePosting}
          setPostingProductField={this.setPostingProductField}
          values={this.state}
        />
      </>
    );
  }
}
