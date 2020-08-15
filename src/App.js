import React, { useEffect, useState } from 'react';
import '@rildev/minimal-css/style.css';
import LatestPostsList from './components/latest-posts-list/latest-posts-list';
import LatestVideosList from './components/latest-videos-list/latest-videos-list';
import Layout from './components/layout/layout';
import styled from 'styled-components';

const AppWrapper = styled.div``;

function App() {
  return (
    <Layout>
      <h2>Latest Posts</h2>
      <LatestPostsList />
      <h2>Latest Videos</h2>
      <LatestVideosList />
    </Layout>
  );
}

export default App;
