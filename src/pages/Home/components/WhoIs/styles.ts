import styled from 'styled-components';

export const Container = styled.div`
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

