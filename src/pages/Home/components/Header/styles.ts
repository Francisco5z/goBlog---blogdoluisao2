import styled from 'styled-components';

export const Container = styled.div`
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
      color: ${props => props.theme.colors.primary};
    }
  }

  img {
    width: 150px;
    @media (max-width: 360px) {
      width: 120px;
      margin-right: 15px;
    }
  }
`;
