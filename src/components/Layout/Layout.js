import React from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import Cards from '../Cards/Cards';
import NewGame from '../NewGame/NewGame';
import Menu from '../Menu/Menu';

const Layout = ({className}) => (
  <BrowserRouter>
    <div className={className}>
      <Route exact path="/" render={() => <Redirect to="/menu" />} />
      <Route path="/new-game" component={NewGame} />
      <Route path="/game" component={Cards} />
      <Route path="/menu" component={Menu} />
    </div>
  </BrowserRouter>
)

export default Layout