import React from 'react';
// import PropTypes from "prop-types";
import Layout from '../../components/layout/layout';
import PostsList from '../../components/posts-list/posts-list';
import LatestVideosList from '../../components/latest-videos-list/latest-videos-list';
import styled from 'styled-components';

const HomeViewWrapper = styled.div``;

const HomeView = props => {
  return (
    <HomeViewWrapper>
      <Layout>
        <h2>Latest Posts</h2>
        <PostsList limit={5}/>
        <h2>Latest Videos</h2>
        <LatestVideosList />
      </Layout>
    </HomeViewWrapper>
  );
};

// HomeView.propTypes = {};

export default HomeView;
