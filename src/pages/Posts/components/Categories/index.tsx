import React from 'react';
import { useLocation } from 'react-router-dom';
import removeUTFSymbols from '../../../../utils/removeUTFSymbols';

import categories from '../../../../data/categories';

import { Container, StyledLink } from './styles';

interface Props {
  category: string;
}

const Categories: React.FC<Props> = ({ category }) => {
  let { pathname } = useLocation();
  pathname = pathname.replace('/posts', '').trim()

  function resolveCategoryURL(text: string) {
    return removeUTFSymbols(text) === 'home' ? "" : removeUTFSymbols(`/${text}`);
  }

  function handleWhichSelected(category: string, pathname: string) {
    category = removeUTFSymbols(category);

    if (category === pathname) {
      return 'true';
    }
    if (category === '/home' && pathname.length === 0) {
      return 'true';
    }
    return 'false';
  }

  return (
    <Container>
      <div>
        {categories.map(i => (
          <StyledLink on={handleWhichSelected(`/${i}`, pathname)} to={`/posts${resolveCategoryURL(i)}`} key={Math.random()}> 
            <span> {i.charAt(0).toUpperCase() + i.slice(1)} </span>  
          </StyledLink> 
        ))}
        </div>
    </Container>
  );
}

export default Categories;