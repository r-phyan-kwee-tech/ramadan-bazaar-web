import styled from 'styled-components';
export type HeroBannerProps = {backgroundUrl?: string};

const defaultPlaceHolder =
  'https://via.placeholder.com/1200x400/ffffff/ff5252?text=ShopLink%20Rewards';
export const HeroImage = styled.div<HeroBannerProps>`
    height:300px;
    width:auto;
    background:url('${({backgroundUrl}) =>
      backgroundUrl ? backgroundUrl : defaultPlaceHolder}') center no-repeat;
`;
