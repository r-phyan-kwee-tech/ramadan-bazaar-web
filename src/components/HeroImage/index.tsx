import * as React from 'react';
import {HeroImage, HeroBannerProps} from './index.style';
const HeroImageComponent: React.FC<HeroBannerProps> = ({backgroundUrl}) => (
  <>
    <HeroImage backgroundUrl={backgroundUrl} />
  </>
);
export default HeroImageComponent;
