import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const path = useLocation().pathname;

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
          <li className={`${path === '/' ? 'active' : ''}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${path === '/about' ? 'active' : ''}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`${path === '/blog' ? 'active' : ''}`}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={`${path === '/youtube' ? 'active' : ''}`}>
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
