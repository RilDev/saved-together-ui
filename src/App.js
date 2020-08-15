import React, { useEffect, useState } from 'react';
import '@rildev/minimal-css/style.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import LatestPostsList from './components/latest-posts-list/latest-posts-list';
import LatestVideosList from './components/latest-videos-list/latest-videos-list';
import Footer from './components/footer/footer';
import GDPRCard from './components/gdpr-card/gdpr-card';
import styled from 'styled-components';

const AppWrapper = styled.div`
  h2 {
    margin: 1rem 0;
    padding: 1rem 0;
    font-size: 2rem;
  }
`;

function App() {


  return (
    <AppWrapper>
      <Header />
      <Nav />
      <main>
        <h2>Latest Posts</h2>
        <LatestPostsList />
        <h2>Latest Videos</h2>
        <LatestVideosList />
      </main>
      <Footer />
      <GDPRCard />
    </AppWrapper>
  );
}

export default App;
