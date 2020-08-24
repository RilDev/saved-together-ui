import React from 'react';
// import PropTypes from "prop-types";
import SEO from "../../components/seo"
import Layout from '../../components/layout/layout';
import PostsList from '../../components/posts-list/posts-list';
import styled from 'styled-components';

const BlogViewWrapper = styled.div``;

const BlogView = props => {
  return (
    <BlogViewWrapper>
    <SEO title="Blog" />
      <Layout>
        <h2>Blog</h2>
        <PostsList limit={100} />
      </Layout>
    </BlogViewWrapper>
  );
};

// BlogView.propTypes = {};

export default BlogView;
