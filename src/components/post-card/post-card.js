import React from 'react';
// import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostCardWrapper = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ddd;
  .title {
    font-weight: bold;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    text-decoration: none;
    color: #333;
  }
  .thumbnail {
    overflow: hidden;
    width: 100%;
    height: 200px;
    margin-bottom: 2rem;
    display: block;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .read-more {
    display: block;
    text-align: right;
  }
`;

const PostCard = ({ post }) => {
  return (
    <PostCardWrapper>
      <Link className={`title`} to={`/post/${post.slug}`}>{post.title}</Link>
      <Link className={`thumbnail`} to={`/post/${post.slug}`}>
        <img src={post.image} alt={``} />
      </Link>
      <div
        className={`excerpt`}
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
      <Link to={`/post/${post.slug}`} className={`read-more`}>
        Read more...
      </Link>
    </PostCardWrapper>
  );
};

// PostCard.propTypes = {};

export default PostCard;
