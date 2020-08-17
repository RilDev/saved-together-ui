import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './hooks/scroll-to-top';
import '@rildev/stylized/style.css';
import HomeView from './views/home-view/home-view';
import AboutView from './views/about-view/about-view';
import BlogView from './views/blog-view/blog-view';
import PostView from './views/post-view/post-view';
import styled from 'styled-components';

const AppWrapper = styled.div``;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/about">
          <AboutView />
        </Route>
        <Route path="/blog">
          <BlogView />
        </Route>
        <Route path="/post/:slug">
          <PostView />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
