import React from 'react';
import PropTypes from 'prop-types';

const CrossIcon = ({ className }) => (
  <svg width="9" height="9" viewBox="0 0 9 9"  className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.23279 4.5L0 7.73684L1.27284 9L4.49437 5.77444L7.72716 9L9 7.73684L5.76721 4.5L9 1.26316L7.72716 0L4.49437 3.22556L1.27284 0L0 1.26316L3.23279 4.5Z" fill="#FAFAFA"/>
  </svg>
);

CrossIcon.propTypes = {
  className: PropTypes.string
};

export default CrossIcon;
