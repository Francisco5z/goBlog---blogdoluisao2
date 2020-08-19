import React from 'react';

import { Container } from './styles';

const Title: React.FC = () => {
  return (
    <Container>
      <h1> 
        <p>Comece a pensar</p>
        <p> como ele </p> 
      </h1>
      <p className="subtitle"> De ideia para ideia vão surgindo coisas brilhantes </p>
    </Container>
  );
}

export default Title;