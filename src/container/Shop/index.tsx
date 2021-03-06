import * as React from 'react';
import Rabbit from '../../rabbit'
import { Col, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import NavBarComponent from '../../components/NavBar';

import MenuItemCard from '../../components/MenuItemCard';
import TagManager from 'react-gtm-module'
import { CardWrapperRow } from '../../components/MenuItemCard/index.style';
import axios from 'axios';
import ShopActionType from './constants';
import ShopReducer, { initialState, MenuItem } from './reducer';
import { RouteComponentProps, StaticContext } from 'react-router';
import { parseBoolean } from '../../utils';



type ShopContainerPageType = RouteComponentProps<any, StaticContext, any> & {
  children?: React.ReactNode;
};

const ShopContainer: React.FC<ShopContainerPageType> = ({ match }) => {
  const [state, dispatch] = React.useReducer(ShopReducer, initialState);

  React.useEffect(() => {
    axios
      .get(`https://halalfood.winhtaikaung.com/api/v1/shop/${match.params.id}/`)
      .then(response => {
        dispatch({
          type: ShopActionType.GET_SHOP_DETAIL_SUCCESS,
          payload: response.data.menu_items,
        });
        const tagManagerArgs = {
          dataLayer: {
            menu_id: match.params.id,
            shop_name: (response.data.menu_items as MenuItem[])[0].name_uni
          },
          dataLayerName: 'GetMenuViewDataLayer'
        }
        TagManager.dataLayer(tagManagerArgs)

      })
      .catch(error => {
        dispatch({ type: ShopActionType.GET_SHOP_DETAIL_FAILED, payload: error });
      });
  }, [match.params.id]);
  const isZawgyi = parseBoolean(match.params.isZawgyi)
  return (
    <>
      {state.loading && (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      )}

      {!state.loading && (
        <>
          <NavBarComponent
            title={
              state.menu_items[0] ? isZawgyi ? Rabbit.uni2zg(state.menu_items[0].name_uni) : state.menu_items[0].name_uni : 'Today Menu'
            }
          />

          <CardWrapperRow gutter={[48, 8]} justify="center">
            {state.menu_items &&
              state.menu_items.map((item: MenuItem, index: number) => (
                <Col key={index} xs={22} sm={10}>
                  <MenuItemCard menuItem={item} isZawgyi={isZawgyi} />
                </Col>
              ))}
          </CardWrapperRow>
        </>
      )}
    </>
  );
};

export default ShopContainer;
