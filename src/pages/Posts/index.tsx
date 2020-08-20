import React, { useState } from 'react';

import { Container } from './styles';

import Header from './components/Header';
import Categories from './components/Categories';


const Posts: React.FC = () => {
  const [category, setCategory] = useState('');

  return (
    <Container>
      <Header 
        category={category} 
        setCategory={setCategory} 
      />
      <Categories
        category={category}
      />
    </Container>
  )
}

export default Posts;