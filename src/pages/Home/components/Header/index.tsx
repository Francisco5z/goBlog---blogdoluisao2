import React from 'react';

import { Container } from './styles';

import Logo from '../../../../assets/goBlog.svg';

interface Props {
  redirectToPost: () => void;
}

const Header: React.FC<Props> = ({ redirectToPost }) => {
  return (
    <Container>
      <img src={Logo} alt="goBlog" />
      <button className="button" onClick={redirectToPost}> Ler </button>
    </Container>
  );
}

export default Header;