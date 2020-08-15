import React, { useEffect, useState } from 'react';
// import PropTypes from "prop-types";
import styled from 'styled-components';

const LatestPostsListWrapper = styled.div`
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
`;

const LatestPostsList = props => {
  const [latestPosts, setLatestPosts] = useState();

  useEffect(() => {
    //get the latest WordPress posts
    getLatestWordPressPosts();
    // eslint-disable-next-line
  }, []);

  const createMarkup = value => ({
    __html: value,
  });

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

  return (
    <LatestPostsListWrapper>
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
    </LatestPostsListWrapper>
  );
};

// LatestPostsList.propTypes = {};

export default LatestPostsList;
