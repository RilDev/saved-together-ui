import React, { useEffect, useState } from 'react';
import { useParams } from '@reach/router';
import Layout from '../../components/layout/layout';
// import PropTypes from "prop-types";
import styled from 'styled-components';

const PostPageWrapper = styled.div`
  .image {
    overflow: hidden;
    max-height: 30rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const PostPage = props => {
  const { slug } = useParams();
  const [post, setPost] = useState();

  const getPost = async slug => {
    try {
      //get latest WordPress Posts
      const response = await fetch(
        `${process.env.GATSBY_API_URL}/posts?slug=${slug}&_embed`,
      );

      if (response.ok) {
        const result = await response.json();

        const formatted = {
          title: result[0].title.rendered,
          content: result[0].content.rendered,
          image:
            result[0]['_embedded']['wp:featuredmedia'][0].media_details.sizes
              ["1536x1536"].source_url,
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
    <PostPageWrapper>
      <Layout>
        {post && (
          <>
            <h2>{post.title}</h2>
            <div className={`image full-width`}>
              <img src={post.image} alt={``} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </>
        )}
      </Layout>
    </PostPageWrapper>
  );
};

// PostPage.propTypes = {};

export default PostPage;
