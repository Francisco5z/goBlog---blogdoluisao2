import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  padding: 100px 0 0 0;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;

    margin: 0 auto;

    text-align: center;

    h1 {
      font-size: 6.5rem;
    }
    p {
      font-size: 2rem;

      margin: 5px 0 15px;

      color: ${props => props.theme.colors.subTitle};
    }
    button {
      font-size: 2.5rem;
      font-weight: bold;

      height: 45px;
      width: 200px;

      cursor: pointer;

      transition: 250ms;
      :hover {
        border: 1px solid ${props => props.theme.colors.primary};
        background-color: transparent;
        color: ${props => props.theme.colors.primary};
      }
    }
  }
  @media (max-width: 360px) {
    padding-top: 30px;
  }
`;
