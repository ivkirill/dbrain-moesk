import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

import './style.scss';

const Filter = ({ options, active = '', onChange }) => {
  const hasActive = Boolean(active);

  return (
    <div className="filter">
      {options && options.map(({ name, value }, index) => {
        let props = {};

        if (hasActive) {
          if (value === active) {
            props.isActive = true;
          }
          else {
            props.isFade = true;
          }
        }

        return (<Button text={name} value={value} onClick={onChange} key={index} {...props} />);
      })}
    </div>
  );
};

Filter.propTypes = {
  options: PropTypes.array,
  active: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
