import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  padding: 30px 70px 0;

  @media (max-width: 605px) {
    padding: 30px 40px 0;
  }

  @media (max-width: 475px) {
    padding: 30px 30px 0;
  }
`;
