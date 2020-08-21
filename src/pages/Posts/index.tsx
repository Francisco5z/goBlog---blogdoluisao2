import React, { useState } from 'react';

import { Container, Main } from './styles';

import Header from './components/Header';
import Categories from './components/Categories';
import ListPosts from './components/ListPosts';

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
      <Main>
        <ListPosts />
      </Main>
    </Container>
  )
}

export default Posts;