import React, { useEffect, useState } from 'react';
// import PropTypes from "prop-types";
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.min.css';
import styled from 'styled-components';

const LatestVideosListWrapper = styled.div`
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
`;

const LatestVideosList = props => {
  const [latestVideos, setLatestVideos] = useState();

  useEffect(() => {
    //get the latest YouTube videos
    getLatestYouTubeVideos();
    // eslint-disable-next-line
  }, []);

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

  const getLatestYouTubeVideos = async () => {
    //get latest YouTube videos
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLrqsSGPJTglOzYa5c1-iMDwY7FY-SKtBV&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
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
  return (
    <LatestVideosListWrapper className={`full-width`}>
      {latestVideos && (
        <Swiper {...swiperParams}>
          {latestVideos.map((video, index) => (
            <a
              key={index}
              href={video.videoUrl}
              target={`_blank`}
              rel={`noopener noreferrer`}
            >
              <div className={`thumbnail`}>
                <img src={video.thumbnail} alt={``} />
              </div>
            </a>
          ))}
        </Swiper>
      )}
    </LatestVideosListWrapper>
  );
};

// LatestVideosList.propTypes = {};

export default LatestVideosList;
