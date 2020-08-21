import React, { useState, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, SearchInputBox , CloseSearchBox } from './styles';

import Logo from '../../../../assets/goBlog.svg';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdClose } from 'react-icons/md'
import { useTheme } from 'styled-components';

interface Props {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<Props> = ({ setCategory, category }) => {
  const [searchInputBoxVisibility, setSearchInputBoxVisibility] = useState(false);

  const { colors: { primary } } = useTheme();

  const { push } = useHistory();

  function handleInputVisibility() {
    setSearchInputBoxVisibility(searchInputBoxVisibility ? false : true);
  }
  function handleChangeInputValue(e: ChangeEvent<HTMLInputElement>) {
    setCategory(e.target.value);
  }

  return (
    <Container searchIconAnimation={searchInputBoxVisibility.toString()}>
      <img 
        src={Logo} 
        alt="goBlog"
        onClick={() => push('/')} 
      />
      <SearchInputBox scroll={window.pageYOffset} visibility={searchInputBoxVisibility.toString()}>
        <input 
          type="text" 
          placeholder="Pesquisar por" 
          value={category}
          onChange={handleChangeInputValue}
        />
      </SearchInputBox>
      <CloseSearchBox onClick={() => setSearchInputBoxVisibility(false)} searchBoxVisibility={searchInputBoxVisibility.toString()}>
        <MdClose size={45} color={primary} />
      </CloseSearchBox>
      <AiOutlineSearch className="searchIcon" onClick={handleInputVisibility} color={primary} size={45} />
    </Container>
  );
}

export default Header;