import React, { useEffect, useState } from 'react';
// import PropTypes from "prop-types";
import PostCard from '../post-card/post-card';
import styled from 'styled-components';

const PostsListWrapper = styled.div``;

const PostsList = ({ limit = 10 }) => {
  const [latestPosts, setLatestPosts] = useState();

  useEffect(() => {
    //get the latest WordPress posts
    getLatestWordPressPosts();
    // eslint-disable-next-line
  }, []);

  const getLatestWordPressPosts = async () => {
    try {
      //get latest WordPress Posts
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/posts?per_page=${limit}&_embed`,
      );
      if (response.ok) {
        const results = await response.json();

        const posts = results.map(post => ({
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          image:
            post['_embedded']['wp:featuredmedia'][0].media_details.sizes
              .medium_large.source_url,
          slug: post.slug,
        }));

        setLatestPosts(posts);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <PostsListWrapper>
      {latestPosts &&
        latestPosts.map((post, index) => <PostCard key={index} post={post} />)}
    </PostsListWrapper>
  );
};

// LatestPostsList.propTypes = {};

export default PostsList;
