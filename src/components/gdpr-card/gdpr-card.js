import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StateContext, DispatchContext } from '../../context/context-provider';
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
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return (
    <GDPRCardWrapper>
      <div className={`gdpr-card ${state.isGDPRCardVisible ? 'visible' : ''}`}>
        <h2>GDPR</h2>
        <p>We don't use any cookies</p>
        <p>We don't store any of your information</p>
        <button
          className="white border-white bg-blue"
          onClick={() =>
            dispatch({ type: 'toggle-isGDPRCardVisible', payload: false })
          }
        >
          Got it!
        </button>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </GDPRCardWrapper>
  );
};

// GDPRCard.propTypes = {};

export default GDPRCard;
