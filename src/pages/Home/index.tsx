import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from './components/Header';
import Title from './components/Title';
import WhoIs from './components/WhoIs';
import Start from './components/Start';
import Footer from './components/Footer';

const Home: React.FC = () => {
  const history = useHistory();

  function redirectToPost() {
    history.push('/posts');
  }
  return (
    <div>
      <Header redirectToPost={redirectToPost} />
      <Title />
      <WhoIs />
      <Start redirectToPost={redirectToPost}/>
      <Footer />
    </div>
    );
  }
  
  export default Home;