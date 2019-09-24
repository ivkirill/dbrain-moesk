import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

import './style.scss';

const Filter = ({ caption, options, active = '', onChange }) => {
  const hasActive = Boolean(active);

  return (
    <div className="filter">
      {options && options.map((option, index) => {
        let props = {};

        if (hasActive) {
          if (option === active) {
            props.isActive = true;
          }
          else {
            props.isFade = true;
          }
        }

        return (<Button text={option} onClick={onChange} key={index} {...props} />);
      })}
    </div>
  );
};

Filter.propTypes = {
  caption: PropTypes.string,
  options: PropTypes.array,
};

export default Filter;
