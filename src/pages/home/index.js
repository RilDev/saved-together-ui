import React from 'react'
// import PropTypes from "prop-types";
import SEO from '../../components/seo'
import Layout from '../../components/layout/layout'
import PostsList from '../../components/posts-list/posts-list'
import LatestVideosList from '../../components/latest-videos-list/latest-videos-list'
import styled from 'styled-components'

const HomePageWrapper = styled.div``

const HomePage = props => {
  return (
    <HomePageWrapper>
      <SEO title="Home" />
      <Layout>
        <h2>Latest Posts</h2>
        <PostsList limit={5} />
        <h2>Latest Videos</h2>
        <LatestVideosList />
      </Layout>
    </HomePageWrapper>
  )
}

// HomePage.propTypes = {};

export default HomePage
