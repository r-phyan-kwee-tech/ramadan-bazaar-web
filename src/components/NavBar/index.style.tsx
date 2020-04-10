import styled from 'styled-components';

export const NavBar = styled.div`
  background-color: rgb(187, 54, 46);
  height: 3.5rem;
  width: 100%;
  position: absolute;
  z-index: 1;
  @media screen and (min-width: 64em) {
    width: 50%;
  }
`;
export const NavBarTitle = styled.p`
  color: white;
  line-height: 3.5rem;
  margin: 0;
  text-align: center;
  font-size: large;
  font-weight: bold;
`;
