import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const  Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px 40px 0 40px;

  button {
    font-size: 3rem;
    font-weight: bold;
    width: 120px;

    cursor: pointer;

    transition: 250ms;
    :hover {
      border: 1px solid ${props => props.theme.colors.primary};
      background-color: transparent;
    }
  }

  img {
    width: 150px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;

  padding: 50px 0 0 0;

  h1 {
    font-size: 7rem;
    text-align: center;
    letter-spacing: -3.5px;
  }
`;