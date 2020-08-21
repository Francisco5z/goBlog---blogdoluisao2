import React from 'react';
import { useLocation } from 'react-router-dom';
import removeUTFSymbols from '../../../../utils/removeUTFSymbols';

import posts from '../../../../data/posts';

import { Container, Post, Thumbnail } from './styles';

const ListPosts: React.FC = () => {
  let { pathname } = useLocation();
  pathname = pathname.replace('/posts', '');

  function postFilterByCategory(category: string) {
    category = category === '' ? 'home' : category.replace('/', '').trim();

    const postsList = posts.map(i => {
      i.categories = removeUTFSymbols(i.categories.join(',')).split(',');

      return i
    });

    return postsList.filter(i => i.categories.includes(category)).map(i => (
      <Post key={i.id}>
        <div>
          <h1> {i.title} </h1> 
          <span className="categories"> Categorias: {handleCategories(i.categories)} </span>
        
          <span> {i.publishedAt}  .  {i.readTime} min read </span>
        </div>
        <Thumbnail image={i.thumbnail} className="thumbnail-container" />
      </Post>
    ));

    function handleCategories(categoriesList: string[]) {
      categoriesList = categoriesList.filter(i => i !== 'home');
      categoriesList[categoriesList.indexOf('opiniao')] = "opinião";

      return categoriesList.join('/');
    }
  }

  return (
    <Container>
      {postFilterByCategory(pathname)}
    </Container>
  );
}

export default ListPosts;