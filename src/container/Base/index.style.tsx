import styled from 'styled-components';

export const MobileWrapper = styled.div`
  background: #efefef;
  overflow: scroll;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  @media screen and (min-width: 64em) {
    width: 50%;
  }
`;
