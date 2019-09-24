import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './style.scss';

const Caption = ({ text, className }) => {
  const classNames = cn('caption', className);
  return (
    <div className={classNames}>
      {text}
    </div>
  );
};

Caption.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Caption;
