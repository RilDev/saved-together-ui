import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/layout';
// import PropTypes from "prop-types";
import styled from 'styled-components';

const PostViewWrapper = styled.div`
  .image {
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const PostView = props => {
  const { slug } = useParams();
  const [post, setPost] = useState();

  const getPost = async slug => {
    try {
      //get latest WordPress Posts
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/posts?slug=${slug}&_embed`,
      );

      if (response.ok) {
        const result = await response.json();
        // prettier-ignore
        console.log('crlntn -- post-view.js result',result)

        const formatted = {
          title: result[0].title.rendered,
          content: result[0].content.rendered,
          image:
            result[0]['_embedded']['wp:featuredmedia'][0].media_details.sizes
              .medium_large.source_url,
        };
        setPost(formatted);
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getPost(slug);
    // eslint-disable-next-line
  }, []);

  return (
    <PostViewWrapper>
      <Layout>
        {post && (
          <>
            <h2>{post.title}</h2>
            <div className={`image`}>
              <img src={post.image} alt={``} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </>
        )}
      </Layout>
    </PostViewWrapper>
  );
};

// PostView.propTypes = {};

export default PostView;