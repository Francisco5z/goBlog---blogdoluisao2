import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Header, Title, WhoIs, Profile, SocialNetworks, Start, Footer } from './styles';

import Logo from '../../assets/Logo.png';
import AuthorImg from '../../assets/AuthorImg.jpg';

import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'

const Home: React.FC = () => {
  const history = useHistory();

  function redirectToPost() {
    history.push('/posts');
  }
  return (
    <Container>
      <Header>
        <img src={Logo} alt="goBlog" />
        <button className="button" onClick={redirectToPost}> Ler </button>
      </Header>
      <Title>
        <h1> Comece a pensar <br /> como ele </h1>
        <p> De ideia para ideia vão surgindo coisas brilhantes </p>
      </Title>
      <WhoIs>
        <div className="container">
          <Profile className="profile">
            <div className="avatar">
              <img src={AuthorImg} alt="Author"/>
            </div>
            <div className="separator"></div>
            <div className="informations">
              <h1> Arthur Luiz W. da silva </h1>
              <p> Autor do goBlog e o famoso “Mano” </p>
            </div>
          </Profile>
          <SocialNetworks className="social-networks">
            <a href="https://www.facebook.com/arthurluiz.ws.7">
              <AiFillFacebook size={35} />
            </a>
            <a href="https://twitter.com/tu7uii">
              <AiFillTwitterCircle size={35} />
            </a>
            <a href="https://www.instagram.com/_arthur_luiz__/?hl=pt-br">
              <AiFillInstagram size={35} />
            </a>
          </SocialNetworks>
        </div>
      </WhoIs>
      <Start>
        <div>
          <h1> Iniciar nessa jornada </h1>
          <p> Leia todos os posts de graça!!! </p>
          <button className="button" onClick={redirectToPost}> Começar a ler </button>
        </div>
      </Start>
      <Footer>
        <h1> Criado em mantido por <br /> <a target="_blanck" href="https://www.instagram.com/zhoufrancisco.py/?hl=pt-br">Francisco Zhou</a>  </h1>
      </Footer>
    </Container>
    );
  }
  
  export default Home;