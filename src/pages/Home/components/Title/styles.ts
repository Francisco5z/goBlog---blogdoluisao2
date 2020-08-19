import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 50px 0 0 0;

  text-align: center;

  h1 p {
    font-size: 7rem;
    letter-spacing: -3.5px;
  }
  .subtitle {
    color: ${props => props.theme.colors.subTitle};
    font-size: 2rem;
  }
`;
