import React from 'react';
// import PropTypes from "prop-types";
import Header from '../header/header';
import Nav from '../nav/nav';
import Footer from '../footer/footer';
import GDPRCard from '../gdpr-card/gdpr-card';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  h2 {
    margin: 1rem 0;
    padding: 1rem 0;
    font-size: 2rem;
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
      <GDPRCard />
    </LayoutWrapper>
  );
};

// Layout.propTypes = {};

export default Layout;
