import React, { useEffect, useState } from 'react';
import '@rildev/stylize/style.css';
import HomeView from './views/home-view/home-view'
import styled from 'styled-components';

const AppWrapper = styled.div``;

function App() {
  return (
    <>
      <HomeView/>
    </>
  );
}

export default App;
