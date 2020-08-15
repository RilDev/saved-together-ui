import React, { useEffect, useState } from 'react';
// import PropTypes from "prop-types";
import styled from 'styled-components';

const GDPRCardWrapper = styled.div`
  .gdpr-card {
    z-index: 3;

    h2 {
      font-size: 1.5rem;
      padding-bottom: 0;
    }
  }
`;

const GDPRCard = props => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // eslint-disable-next-line
  }, []);

  return (
    <GDPRCardWrapper>
      <div className={`gdpr-card ${isVisible ? 'visible' : ''}`}>
        <h2>GDPR</h2>
        <p>We don't use any cookies</p>
        <p>We don't store any of your information</p>
        <button
          className="white border-white bg-blue"
          onClick={() => setIsVisible(false)}
        >
          Got it!
        </button>
      </div>
    </GDPRCardWrapper>
  );
};

// GDPRCard.propTypes = {};

export default GDPRCard;
