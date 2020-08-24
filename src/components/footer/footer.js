import React from 'react';
// import PropTypes from "prop-types";
import styled from 'styled-components';

const FooterWrapper = styled.footer``;

const Footer = props => {
  return (
    <FooterWrapper>
      By{' '}
      <a
        href="https://rildev.website"
        target="_blank"
        rel="noopener noreferrer"
      >
        RilDev
      </a>
    </FooterWrapper>
  );
};

// Footer.propTypes = {};

export default Footer;
