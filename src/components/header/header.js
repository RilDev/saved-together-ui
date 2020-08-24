import React from 'react';
// import PropTypes from "prop-types";
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  header {
    background: #eae4de;
    z-index: 3;
    padding: 10vw 1rem;

    h1 {
      color: #5d5954;
      letter-shadow: none;
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
      align-items: flex-end;
      line-height: 0.22;
      max-width: 40rem;
      margin: 2rem auto 0;

      .saved {
        font-family: 'Herr Von Muellerhoff', cursive;
        font-size: 6rem;
        letter-spacing: 0.4rem;
        margin-right: 1rem;
        margin-bottom: 4rem;
        flex: 1;
      }

      .together {
        font-family: 'Lora';
        text-transform: uppercase;
        letter-spacing: 1rem;
        margin-bottom: 4rem;
        flex: 1;
      }
    }

    .title {
      font-family: 'Lora';
      font-size: 1.5rem;
      color: #5d5954;
      margin: 0 auto;
      margin-top: -2rem;
      display: flex;
      flex-flow: wrap;
      max-width: 18rem;
      justify-content: space-between;
      align-items: flex-end;
      line-height: 0.67;

      & > div {
        flex: 1;
        white-space: nowrap;
        margin-bottom: 0.6rem;
      }

      .master {
        font-size: 3rem;
      }
    }
  }
`;

const Header = props => {
  return (
    <HeaderWrapper>
      <header>
        <h1>
          <div className={`saved`}>Saved</div>
          <div className={`together`}>Together</div>
        </h1>
        <div className={`title`}>
          <div>at the feet of</div> <div className={`master`}>Jesus</div>
        </div>
        {/* <a */}
        {/*   href="https://www.youtube.com/channel/UCcMwrWOscFaqptk5l43WkOQ" */}
        {/*   target="_blank" */}
        {/* > */}
        {/*   YouTube */}
        {/* </a> */}
      </header>
    </HeaderWrapper>
  );
};

// Header.propTypes = {};

export default Header;
