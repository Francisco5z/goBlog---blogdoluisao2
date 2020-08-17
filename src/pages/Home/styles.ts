import styled from 'styled-components';

export const Container = styled.div``;

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

export const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 50px 0 0 0;

  text-align: center;

  h1 {
    font-size: 7rem;
    letter-spacing: -3.5px;
  }
  p {
    color: ${props => props.theme.colors.subTitle};
    font-size: 2rem;
  }
`;

export const WhoIs = styled.div`
  padding: 120px 0 0 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 360px) {
    /* transform: scale(0.8); */

    padding-top: 80px;
  }
`;

export const Profile = styled.div`
  background-color: ${props => props.theme.colors.secundaryBackground};

  border: ${props => props.theme.colors.border} 1px solid;
  border-radius: 4px;

  max-width: 300px;
  width: 100%;

  padding: 20px 20px 30px 20px;

  .avatar {
    width: 100%;
    height: 170px;
    
    display: flex;
    justify-content: center;
    
    img {
      border-radius: 50%;
      
      width: 120px;
      height: 120px;
    }
  }

  .separator {
    width: 60px;
    height: 2px;
    
    background-color: ${props => props.theme.colors.primary};
  }

  .informations {
    padding: 20px 0 0 0;
    
    h1 {
      font-size: 2.5rem;
    }
    p {
      margin-top: 2px;
      font-size: 1.4rem;
      color: ${props => props.theme.colors.subTitle};
    }
  }
`;

export const SocialNetworks = styled.div`
  background-color: ${props => props.theme.colors.secundaryBackground};

  border: ${props => props.theme.colors.border} 1px solid;
  border-radius: 4px;

  padding: 15px 0 15px 0;

  margin-left: 30px;

  width: 90px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  
  a svg {
    color: ${props => props.theme.colors.primary};
      
    transition: 250ms;
    :hover {
      color: #eee;
      transform: scale(1.1);
    }
  }
`;

export const Start = styled.div`
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

export const Footer = styled.div`
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