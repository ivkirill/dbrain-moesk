import React from 'react';
import PropTypes from 'prop-types';

const BackIcon = ({ className }) => (
  <svg width="15" height="24" viewBox="0 0 15 24" className={className}  fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 12L13 22" stroke="#FAFAFA" stroke-width="3" stroke-miterlimit="1.5"/>
  </svg>
);

BackIcon.propTypes = {
  className: PropTypes.string
};

export default BackIcon;
