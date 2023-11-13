import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1240px;
    padding-left: 96px;
    padding-right: 96px;
  }
`;

export default Container;




