import React, { useEffect, useState } from 'react';
// import PropTypes from "prop-types";
import Layout from '../../components/layout/layout';
import styled from 'styled-components';

const SinglePageWrapper = styled.div``;

const SinglePage = ({slug}) => {
  const [pageTitle, setPageTitle] = useState();
  const [pageContent, setPageContent] = useState();

  useEffect(() => {
    getPageContent('about');
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
  // eslint-disable-next-line
  }, [pageContent]);

  const getPageContent = async pageSlug => {
    const response = await fetch(
      `${process.env.GATSBY_API_URL}/pages?slug=${pageSlug}`,
    );

    if (response.ok) {
      const results = await response.json();

      setPageTitle(results[0].title.rendered);
      setPageContent(results[0].content.rendered);
    }
  };
  return (
    <SinglePageWrapper>
      <Layout>
        {pageTitle && pageContent && (
          <>
            <h2>{pageTitle}</h2>
            <div dangerouslySetInnerHTML={{__html: pageContent}}/>
          </>
        )}
      </Layout>
    </SinglePageWrapper>
  );
};

// SinglePage.propTypes = {};

export default SinglePage;
