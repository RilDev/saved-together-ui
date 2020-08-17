import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from "prop-types";
import ScrollBooster from 'scrollbooster';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  nav {
    z-index: 2;
  }
`;

const Nav = props => {
  const refViewport = useRef();
  const refContainer = useRef();

  useEffect(() => {
    //initialize the ScrollBooster object
    new ScrollBooster({
      viewport: refViewport.current,
      content: refContainer.current,
      direction: 'horizontal',
      scrollMode: 'transform',
      bounce: false,
    });

    // eslint-disable-next-line
  }, []);
  return (
    <NavWrapper>
      <div ref={refViewport} className={`scroll-booster`}>
        <ul ref={refContainer}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a href="/" target="_blank">
              YouTube
            </a>
          </li>
          {/*this last item is necessary to adjust the scroll-nav*/}
          <li>sbla</li>
        </ul>
      </div>
    </NavWrapper>
  );
};

// Nav.propTypes = {};

export default Nav;
