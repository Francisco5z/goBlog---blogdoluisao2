import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  margin-top: 130px;

  height: 130px;

  font-size: 1.3rem;

  background-color: ${props => props.theme.colors.secundaryBackground};

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;

    :hover {
      opacity: 0.7;
    }
  }
`;
