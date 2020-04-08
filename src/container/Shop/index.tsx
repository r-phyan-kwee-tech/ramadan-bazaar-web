import * as React from 'react';
import {Col} from 'antd';
import NavBarComponent from '../../components/NavBar';

import MenuItemCard from '../../components/MenuItemCard';

import {CardWrapperRow} from '../../components/MenuItemCard/index.style';
import axios from 'axios';
import ShopActionType from './constants';
import ShopReducer, {initialState} from './reducer';
import {RouteComponentProps, StaticContext, withRouter} from 'react-router';

type ShopContainerPageType = RouteComponentProps<any, StaticContext, any> & {
  children?: React.ReactNode;
};

const ShopContainer: React.FC<ShopContainerPageType> = () => {
  const [state, dispatch] = React.useReducer(ShopReducer, initialState);

  React.useEffect(() => {
    axios
      .get('https://reqres.in/api/users/2')
      .then(response => {
        dispatch({
          type: ShopActionType.GET_SHOP_DETAIL_SUCCESS,
          payload: response.data.data,
        });
      })
      .catch(error => {
        dispatch({type: ShopActionType.GET_SHOP_DETAIL_FAILED, payload: error});
      });
  }, []);
  return (
    <>
      <NavBarComponent title="Navbar" />
      <CardWrapperRow gutter={[48, 8]} justify="center">
        <Col xs={22} sm={10}>
          <MenuItemCard />
        </Col>
        <Col xs={22} sm={10}>
          <MenuItemCard />
        </Col>
      </CardWrapperRow>
      {state.loading ? 'Loading!! Please wait' : state.shop.email}
      {state.error ? state.error : null}
    </>
  );
};

export default ShopContainer;
