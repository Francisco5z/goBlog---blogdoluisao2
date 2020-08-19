import React from 'react';

import { Container, Profile, SocialNetworks } from './styles';

import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'

import AuthorImg from '../../../../assets/AuthorImg.jpg';

const WhoIs: React.FC = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default WhoIs;