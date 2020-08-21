import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/Global';

import Routes from './Routes';

import dark from './assets/styles/themes/dark';

function App() {
  useEffect(() => {
    const isFirstTime = localStorage.getItem('FirstTime');
    
    if (!isFirstTime) {
      localStorage.setItem('FirstTime', 'true');
      return;
    }

    localStorage.setItem('FirstTime', 'false')
  }, []);

  return (
    <ThemeProvider theme={dark}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
