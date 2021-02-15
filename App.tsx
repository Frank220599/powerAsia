import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { Dispatch, RootState } from './src/store';
import { connect } from 'react-redux';
import LoadingView from './src/components/LoadingView';

class App extends React.Component<Props> {
  componentDidMount() {
    this.props.getProducts();
    this.props.getPaymentTypes();
    this.props.getCurrencies();
    this.props.getWriteOffTypes();
    this.props.getManagers();
    this.props.getStockList();
    this.props.getProductList();
  }

  render() {
    if (this.props.isLoading) {
      return <LoadingView />;
    }
    return <AppNavigation />;
  }
}

const mapState = ({
  loading: {
    effects: {
      stock: { getStockList },
      handbooks: {
        getWriteOffTypes,
        getCurrencies,
        getPaymentTypes,
        getProducts,
        getManagers,
      },
      product: { getProductList },
    },
  },
}: RootState) => ({
  isLoading:
    getStockList &&
    getWriteOffTypes &&
    getCurrencies &&
    getPaymentTypes &&
    getProducts &&
    getProductList &&
    getManagers,
});

const mapDispatch = ({
  handbooks: {
    getWriteOffTypes,
    getCurrencies,
    getPaymentTypes,
    getProducts,
    getManagers,
  },
  stock: { getStockList },
  product: { getProductList },
}: Dispatch) => ({
  getWriteOffTypes,
  getCurrencies,
  getPaymentTypes,
  getProducts,
  getManagers,
  getStockList,
  getProductList,
});

type StateProps = ReturnType<typeof mapState>;
type DisPatchProps = ReturnType<typeof mapDispatch>;

export type Props = DisPatchProps & StateProps;

export default connect(mapState, mapDispatch)(App);
