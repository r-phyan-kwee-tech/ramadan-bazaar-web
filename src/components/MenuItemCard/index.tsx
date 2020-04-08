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

const MenuItemCardComponent: React.FC = () => (
  <>
    <MenuItemCard
      hoverable
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }>
      <MenuItemTitle>Item Title</MenuItemTitle>
      <MenuItemDescription>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </MenuItemDescription>
      <TagWrapper>
        <Tag>123123</Tag>
      </TagWrapper>
      <PriceOrderWrapper>
        <MenuItemPrice>1000 MMK</MenuItemPrice>

        <OrderButton href="tel:+959421575529">အော်ဒါမှာမည်</OrderButton>
      </PriceOrderWrapper>
    </MenuItemCard>
  </>
);
export default MenuItemCardComponent;
