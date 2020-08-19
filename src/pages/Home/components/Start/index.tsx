import React from 'react';

import { Container } from './styles';

interface Props {
  redirectToPost: () => void;
}

const Start: React.FC<Props> = ({ redirectToPost }) => {
  return (
    <Container>
      <div>
        <h1> Iniciar nessa jornada </h1>
        <p> Leia todos os posts de graça!!! </p>
        <button className="button" onClick={redirectToPost}> Começar a ler </button>
      </div>
    </Container>
  )
}

export default Start;