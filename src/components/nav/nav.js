import React from 'react';
// import PropTypes from "prop-types";
import styled from 'styled-components';

const NavWrapper = styled.div`
  nav {
    z-index: 2;
  }
`;

const Nav = props => {
  return (
    <NavWrapper>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">YouTube</a>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  );
};

// Nav.propTypes = {};

export default Nav;
