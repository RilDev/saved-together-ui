import React, { useEffect, useState } from 'react';
import '@rildev/minimal-css/style.css';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.min.css';
import styled from 'styled-components';

const AppWrapper = styled.div`
  header {
    background: #eae4de;
    z-index: 3;
    padding: 10vw 1rem;

    h1 {
      color: #5d5954;
      letter-shadow: none;
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      align-items: flex-end;
      line-height: 0.22;
      max-width: 40rem;
      margin: 2rem auto 0;

      .saved {
        font-family: 'Herr Von Muellerhoff', cursive;
        font-size: 6rem;
        letter-spacing: 0.4rem;
        margin-right: 1rem;
        margin-bottom: 4rem;
        flex: 1;
      }

      .together {
        font-family: 'Lora';
        text-transform: uppercase;
        letter-spacing: 1rem;
        margin-bottom: 4rem;
        flex: 1;
      }
    }

    .title {
      font-family: 'Lora';
      font-size: 1.5rem;
      color: #5d5954;
      margin: 0 auto;
      margin-top: -2rem;
      display: flex;
      flex-flow: wrap;
      max-width: 18rem;
      justify-content: space-between;
      align-items: flex-end;
      line-height: 0.67;

      & > div {
        flex: 1;
        white-space: nowrap;
        margin-bottom: 0.6rem;
      }

      .master {
        font-size: 3rem;
      }
    }
  }

  nav {
    z-index: 2;
  }

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

  .swiper-container {
    .thumbnail {
      overflow: hidden;
      text-align: center;

      img {
        width: 80%;
        // height: 100%;
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
  const [latestPosts, setLatestPosts] = useState();

  const createMarkup = value => ({
    __html: value,
  });

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

  const swiperParams = {
    slidesPerView: 5,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  useEffect(async () => {
    setGDPRCardVisibility(true);
    const response = await fetch(
      'http://vccw.test/wp-json/wp/v2/posts?per_page=5&_embed',
    );
    const results = await response.json();
    // prettier-ignore
    console.log('crlntn -- App.js result',results)
    const posts = results.map(post => ({
      title: post.title.rendered,
      excerpt: post.excerpt.rendered,
      image:
        post['_embedded']['wp:featuredmedia'][0].media_details.sizes
          .medium_large.source_url,
    }));
    // prettier-ignore
    console.log('crlntn -- App.js posts',posts)
    setLatestPosts(posts);
    // eslint-disable-next-line
  }, []);

  return (
    <AppWrapper>
      <header>
        <h1>
          <div className={`saved`}>Saved</div>
          <div className={`together`}>Together</div>
        </h1>
        <div className={`title`}>
          <div>at the feet of</div> <div className={`master`}>Jesus</div>
        </div>
        {/* <a */}
        {/*   href="https://www.youtube.com/channel/UCcMwrWOscFaqptk5l43WkOQ" */}
        {/*   target="_blank" */}
        {/* > */}
        {/*   YouTube */}
        {/* </a> */}
      </header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">YouTube</a>
          </li>
        </ul>
      </nav>
      <main>
        <h2>Latest Posts</h2>
        {latestPosts &&
          latestPosts.map(post => (
            <article className={`blog-post`}>
              <div className={`title`}>{post.title}</div>
              <div className={`thumbnail`}>
                <img src={post.image} alt={``} />
              </div>
              <div
                className={`excerpt`}
                dangerouslySetInnerHTML={createMarkup(post.excerpt)}
              />
            </article>
          ))}
        <h2>Latest Videos</h2>
        <div className={`full-width`}>
          <Swiper {...swiperParams}>
            <div>
              <div className={`thumbnail`}>
                <img src={`https://via.placeholder.com/400`} alt={``} />
              </div>
            </div>
            <div>
              <div className={`thumbnail`}>
                <img src={`https://via.placeholder.com/400`} alt={``} />
              </div>
            </div>
            <div>
              <div className={`thumbnail`}>
                <img src={`https://via.placeholder.com/400`} alt={``} />
              </div>
            </div>
            <div>
              <div className={`thumbnail`}>
                <img src={`https://via.placeholder.com/400`} alt={``} />
              </div>
            </div>
            <div>
              <div className={`thumbnail`}>
                <img src={`https://via.placeholder.com/400`} alt={``} />
              </div>
            </div>
            <div>
              <div className={`thumbnail`}>
                <img src={`https://via.placeholder.com/400`} alt={``} />
              </div>
            </div>
            <div>
              <div className={`thumbnail`}>
                <img src={`https://via.placeholder.com/400`} alt={``} />
              </div>
            </div>
            <div>
              <div className={`thumbnail`}>
                <img src={`https://via.placeholder.com/400`} alt={``} />
              </div>
            </div>
            <div>
              <div className={`thumbnail`}>
                <img src={`https://via.placeholder.com/400`} alt={``} />
              </div>
            </div>
            <div>
              <div className={`thumbnail`}>
                <img src={`https://via.placeholder.com/400`} alt={``} />
              </div>
            </div>
          </Swiper>
        </div>
      </main>
      <footer>
        By{' '}
        <a href="https://rildev.website" target="_blank">
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
