import styled, { keyframes } from 'styled-components';

const clockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const anticlockwise = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const Container = styled.header<{ searchIconAnimation: string }>`
  padding: 30px 40px;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 150px;

    z-index: 10;
  }

  svg {
    cursor: pointer;

    z-index: 10;

    animation: ${props => props.searchIconAnimation === 'true' ? clockwise : anticlockwise} 250ms linear;
  }
`;

export const SearchInputBox = styled.div<{ visibility: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  transition: all 250ms;
  padding: 30px ${props => props.visibility === 'true' ? "120px" : "-1000px"} 30px 40px;

  position: absolute;
  left: 0px;
  top: 0px;

  width: 100%;
  height: 105px;

  @media (max-width: 680px) {
    justify-content: flex-start;
    align-items: flex-end;

    padding: 0 ${props => props.visibility === 'true' ? "0" : "-1000px"} 0 50px;

    height: 140px;

    input {
      max-width: 350px;
      width: 100%;
    }
  }

  input {
    background-color: ${props => props.theme.colors.secundaryBackground};

    border: 0;
    border-radius: 4px;

    padding: 7px;

    font-size: 1.7rem;

    color: ${props => props.theme.colors.text};

    height: 35px;
    width: 250px;
    
    transition: 250ms;

    opacity: ${props => props.visibility === 'true' ? "1" : "0"};

    &:focus {
      transition: none;

      border: 1px solid ${props => props.theme.colors.primary};

      &::placeholder {
        color: #eee;
      }
    }
  }
`;