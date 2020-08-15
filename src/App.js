import React, { useEffect, useState } from 'react';
import '@rildev/minimal-css/style.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import LatestPostsList from './components/latest-posts-list/latest-posts-list';
import LatestVideosList from './components/latest-videos-list/latest-videos-list';
import styled from 'styled-components';

const AppWrapper = styled.div`
  h2 {
    margin: 1rem 0;
    padding: 1rem 0;
    font-size: 2rem;
  }

  article {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #ddd;
    .title {
      font-weight: bold;
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    .thumbnail {
      overflow: hidden;
      width: 100%;
      height: 200px;
      margin-bottom: 2rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }


  .gdpr-card {
    z-index: 3;

    h2 {
      font-size: 1.5rem;
      padding-bottom: 0;
    }
  }
`;

function App() {


  //parameter: flag -> bool, show / hide the .GDPR-card
  const setGDPRCardVisibility = flag => {
    const GDPRCard = document.querySelector('.gdpr-card');

    //if no .GDPR-card, do nothing
    if (!GDPRCard) {
      return;
    }

    if (flag) {
      GDPRCard.classList.add('visible');
    } else {
      GDPRCard.classList.remove('visible');
    }
  };


  useEffect(() => {
    //GDPR card
    setGDPRCardVisibility(true);


    // eslint-disable-next-line
  }, []);

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
      <footer>
        By{' '}
        <a
          href="https://rildev.website"
          target="_blank"
          rel="noopener noreferrer"
        >
          RilDev
        </a>
      </footer>
      <div className="gdpr-card">
        <h2>GDPR</h2>
        <p>We don't use any cookies</p>
        <p>We don't store any of your information</p>
        <button
          className="white border-white bg-blue"
          onClick={() => setGDPRCardVisibility(false)}
        >
          Got it!
        </button>
      </div>
    </AppWrapper>
  );
}

export default App;
