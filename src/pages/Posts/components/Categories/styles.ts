import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  /* margin-top: 60px; */

  padding: 0 30px;

  @media (max-width: 680px) {
    margin-top: 60px;
  }

  @media (min-width: 605px) {
    padding: 0 55px;

    div {
      overflow: hidden;
    }
  }

  @media (max-width: 520px) {
    padding: 0 20px;
  }

  div {
    display: flex;
    flex-direction: row;

    /* min-width: 501px; */
    
    padding: 10px 9px;

    border: 1px solid ${props => props.theme.colors.border};
    border-radius: 4px;

    overflow-x: scroll;

    background-color: ${props => props.theme.colors.secundaryBackground};
  
    @media (min-width: 605px) {
      overflow: hidden;
    }
  }
`;

export const StyledLink = styled(Link)<{ on: string }>`
  margin: 0 10px;

  font-size: 2.5rem;
  font-weight: bold;

  span {
    color: ${props => props.on === 'true' ? "#EEE" : "#AAA"};
  }
`;