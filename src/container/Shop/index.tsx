import * as React from 'react';
import {Col, Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';

import NavBarComponent from '../../components/NavBar';

import MenuItemCard from '../../components/MenuItemCard';

import {CardWrapperRow} from '../../components/MenuItemCard/index.style';
import axios from 'axios';
import ShopActionType from './constants';
import ShopReducer, {initialState, MenuItem} from './reducer';
import {RouteComponentProps, StaticContext} from 'react-router';

type ShopContainerPageType = RouteComponentProps<any, StaticContext, any> & {
  children?: React.ReactNode;
};

const ShopContainer: React.FC<ShopContainerPageType> = ({match}) => {
  const [state, dispatch] = React.useReducer(ShopReducer, initialState);

  React.useEffect(() => {
    axios
      .get(`https://halalfood.winhtaikaung.com/api/v1/shop/${match.params.id}/`)
      .then(response => {
        dispatch({
          type: ShopActionType.GET_SHOP_DETAIL_SUCCESS,
          payload: response.data.menu_items,
        });
      })
      .catch(error => {
        dispatch({type: ShopActionType.GET_SHOP_DETAIL_FAILED, payload: error});
      });
  }, [match.params.id]);
  return (
    <>
      {state.loading && (
        <Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin />} />
      )}

      {!state.loading && (
        <>
          <NavBarComponent
            title={
              state.menu_items[0] ? state.menu_items[0].name_uni : 'Today Menu'
            }
          />

          <CardWrapperRow gutter={[48, 8]} justify="center">
            {state.menu_items &&
              state.menu_items.map((item: MenuItem, index: number) => (
                <Col key={index} xs={22} sm={10}>
                  <MenuItemCard menuItem={item} />
                </Col>
              ))}
          </CardWrapperRow>
        </>
      )}
    </>
  );
};

export default ShopContainer;
