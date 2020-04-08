import * as React from 'react';
import {NavBar, NavBarTitle} from './index.style';
type NavBarType = {
  title: string;
};

const NavBarComponent: React.FC<NavBarType> = ({title}) => {
  return (
    <>
      <NavBar>
        <NavBarTitle>{title}</NavBarTitle>
      </NavBar>
    </>
  );
};

export default NavBarComponent;
