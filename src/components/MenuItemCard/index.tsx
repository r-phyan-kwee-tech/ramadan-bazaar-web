import * as React from 'react';
import {
  MenuItemCard,
  MenuItemTitle,
  MenuItemPrice,
  MenuItemDescription,
  Tag,
  TagWrapper,
  PriceOrderWrapper,
  OrderButton,
} from './index.style';
import { MenuItem } from '../../container/Shop/reducer';
export type MenuCardComponentType = {
  menuItem: MenuItem;
};
const MenuItemCardComponent: React.FC<MenuCardComponentType> = ({ menuItem }) => {
  const {
    unit_price,
    menu_item_name,
    description_uni,
    menu_category_name,
    phone_number_1,
    image_url
  } = menuItem;
  return (
    <>
      <MenuItemCard
        hoverable
        cover={
          <img
            alt="example"
            src={image_url}
          />
        }>
        <MenuItemTitle>{menu_item_name}</MenuItemTitle>
        <MenuItemDescription>{description_uni}</MenuItemDescription>
        <TagWrapper>
          <Tag>{menu_category_name}</Tag>
        </TagWrapper>
        <PriceOrderWrapper>
          <MenuItemPrice>{`${unit_price} MMK`}</MenuItemPrice>

          <OrderButton href={`tel:${phone_number_1}`}>အော်ဒါမှာမည်</OrderButton>
        </PriceOrderWrapper>
      </MenuItemCard>
    </>
  );
};
export default MenuItemCardComponent;
