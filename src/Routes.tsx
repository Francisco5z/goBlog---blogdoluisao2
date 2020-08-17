import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Home from './pages/Home';
import Posts from './pages/Posts';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts" component={Posts} />
    </Switch>
  );
}

export default Routes;