import React from 'react';

import { Container, Header, Title } from './styles';

import Logo from '../../assets/Logo.png';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={Logo} alt="goBlog" />
        <button className="button"> Ler </button>
      </Header>
      <Title>
        <h1> Comece a pensar <br /> como ele </h1>
      </Title>
    </Container>
  );
}

export default Home;