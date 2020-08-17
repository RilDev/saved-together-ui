import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '@rildev/stylize/style.css';
import HomeView from './views/home-view/home-view';
import AboutView from './views/about-view/about-view';
import styled from 'styled-components';

const AppWrapper = styled.div``;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <AboutView />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
