import React from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import {Cards, NewGame, Menu, EndGame} from '../../components'

const Layout = ({className}) => (
  <BrowserRouter>
    <div className={className}>
      <Route exact path="/" render={() => <Redirect to="/menu" />} />
      <Route path="/game" component={Cards} />
      <Route path="/new-game" component={NewGame} />
      <Route path="/end-game" component={EndGame} />
      <Route path="/menu" component={Menu} />
    </div>
  </BrowserRouter>
)

export default Layout