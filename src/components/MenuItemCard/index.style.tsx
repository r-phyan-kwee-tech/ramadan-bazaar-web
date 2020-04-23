import styled from 'styled-components';
import { Card, Row } from 'antd';

export const CardWrapperRow = styled(Row)`
  margin: 0 !important;
`;

export const MenuItemCard = styled(Card)`
  &&& {
    border-radius: 25px 25px 25px 25px;
    .ant-card-cover {
      img {
        height: calc(100vh / 3.5);
        border-radius: 25px 25px 0 0;
        object-fit: cover;
        @media screen and (min-width: 64em) {
          height: calc(100vh / 5.5);
        }
      }
    }
  }
`;

export const MenuItemTitle = styled.p`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Lato';
`;

export const MenuItemDescription = styled.p`
  color: black;
  font-size: 0.8rem;
  text-align: left;
  height: 5rem;
  overflow: scroll;

  font-family: 'Lato';
`;
export const LastOrderDescription = styled.p`
  color: black;
  font-size: 1rem;
  text-align: left;
  height: 2rem;
  overflow: scroll;
  font-weight:bold;
  font-family: 'Lato';
`;

export const TagWrapper = styled.p`
  text-align: left;
  padding: 0.2rem;
  overflow-x: scroll;
  line-height: 2.5rem;
  overflow-y: hidden;
`;

export const Tag = styled.span`
  
  border:1px solid rgb(187, 54, 46);
  width: auto;
  color: rgb(187, 54, 46);
  padding: 0.5rem;
  margin: 0 0.5rem 0 0;

  font-family: 'Lato';
  border-radius: 100px;
`;

export const PriceOrderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MenuItemPrice = styled.p`
  color: black;
  font-size: 1.2rem;
  line-height: 2.5rem;
  flex-grow: 1;

  font-family: 'Lato';
  font-weight: 900;
`;

export const OrderButton = styled.button`
  color: white;
  border-radius: 100px;
  text-align: center;
  border: 0;
  background: rgb(187, 54, 46);
  height: 2.5rem;
  line-height: 1.5rem;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  font-family: 'Lato';
  padding: 0.5rem;
`;
