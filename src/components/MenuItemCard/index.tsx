import * as React from 'react';
import isEmpty from 'lodash/isEmpty'
import Rabbit from '../../rabbit'
import TagManager from 'react-gtm-module'
import {
  MenuItemCard,
  MenuItemTitle,
  MenuItemPrice,
  MenuItemDescription,
  Tag,
  TagWrapper,
  PriceOrderWrapper,
  OrderButton,
  LastOrderDescription,
} from './index.style';
import { MenuItem } from '../../container/Shop/reducer';
export type MenuCardComponentType = {
  menuItem: MenuItem;
  isZawgyi: boolean;
};
const MenuItemCardComponent: React.FC<MenuCardComponentType> = ({ menuItem, isZawgyi }) => {
  const {
    name_uni,
    unit_price,
    description_uni,
    menu_item_name,
    menu_category_name,
    phone_number_1,
    image_url,
    last_order_remark
  } = menuItem;
  return (
    <>
      <MenuItemCard
        hoverable
        cover={
          <img
            alt={menu_item_name}
            src={image_url}
          />
        }>
        <MenuItemTitle>{isZawgyi ? Rabbit.uni2zg(menu_item_name) : menu_item_name}</MenuItemTitle>
        <MenuItemDescription>{isZawgyi ? Rabbit.uni2zg(description_uni) : description_uni}</MenuItemDescription>
        {!isEmpty(last_order_remark) && <LastOrderDescription>{isZawgyi ? Rabbit.uni2zg(last_order_remark) : last_order_remark}</LastOrderDescription>}
        <TagWrapper>
          <Tag>{isZawgyi ? Rabbit.uni2zg(menu_category_name) : menu_category_name}</Tag>
        </TagWrapper>
        <PriceOrderWrapper>
          <MenuItemPrice>{`${unit_price} MMK`}</MenuItemPrice>

          <OrderButton onClick={() => {
            window.location.href = `tel:+${phone_number_1}`
            const tagManagerArgs = {
              dataLayer: {
                isZawgyi: isZawgyi,
                menu_item_name: menu_item_name,
                shop_name: name_uni
              },
              events: {
                sendUserInfo: 'userClickToOrder'
              },
              dataLayerName: 'GetMenuItemDataLayer'
            }
            TagManager.dataLayer(tagManagerArgs)

          }}>{isZawgyi ? Rabbit.uni2zg("အော်ဒါမှာမည်") : "အော်ဒါမှာမည်"}</OrderButton>
        </PriceOrderWrapper>
      </MenuItemCard>
    </>
  );
};
export default MenuItemCardComponent;
