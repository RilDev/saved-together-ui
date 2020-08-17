import React, { useEffect , useRef} from 'react';
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
        <li>
          <a href="/">YouTube</a>
        </li>
        <li>
          <a href="/">YouTube</a>
        </li>
        <li>
          <a href="/">YouTube</a>
        </li>
        <li>
          <a href="/">YouTube</a>
        </li>
      </ul>
      </div>
    </NavWrapper>
  );
};

// Nav.propTypes = {};

export default Nav;
