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
  const [latestVideos, setLatestVideos] = useState();

  const createMarkup = value => ({
    __html: value,
  });

  const getLatestYouTubeVideos = async () => {
    //get latest YouTube videos
    try {
      const response = await fetch(
        'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLrqsSGPJTglOzYa5c1-iMDwY7FY-SKtBV&maxResults=10&key=AIzaSyBz9-FwnmhvuIQJGlj5WhaHbiEX9F8kYMc',
      );

      if (response.ok) {
        const results = await response.json();

        const videos = results.items.map(result => ({
          thumbnail: result.snippet.thumbnails.medium.url,
          videoUrl: `https://www.youtube.com/watch?v=${result.snippet.resourceId.videoId}&list=${result.snippet.playlistId}&index=${result.snippet.position}`,
        }));

        // prettier-ignore
        console.log('crlntn -- App.js videos',videos)
        setLatestVideos(videos);
      }
    } catch (error) {
      throw error;
    }
  };

  const getLatestWordPressPosts = async () => {
    try {
      //get latest WordPress Posts
      const response = await fetch(
        'http://vccw.test/wp-json/wp/v2/posts?per_page=5&_embed',
      );
      if (response.ok) {
        const results = await response.json();

        const posts = results.map(post => ({
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          image:
            post['_embedded']['wp:featuredmedia'][0].media_details.sizes
              .medium_large.source_url,
        }));

        setLatestPosts(posts);
      }
    } catch (error) {
      throw error;
    }
  };

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

  useEffect(() => {
    //GDPR card
    setGDPRCardVisibility(true);

    //get the latest WordPress posts
    getLatestWordPressPosts();

    //get the latest YouTube videos
    getLatestYouTubeVideos();

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
          latestPosts.map((post, index) => (
            <article key={index} className={`blog-post`}>
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
          {latestVideos && (
            <Swiper {...swiperParams}>
              {latestVideos.map((video, index) => (
                <a key={index} href={video.videoUrl} target={`_blank`}>
                  <div className={`thumbnail`}>
                    <img src={video.thumbnail} alt={``} />
                  </div>
                </a>
              ))}
            </Swiper>
          )}
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
