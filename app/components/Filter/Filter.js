import React from 'react';
import PropTypes from 'prop-types';
import Caption from 'components/Caption';
import './style.scss';

const Filter = ({ items }) => {
  return (
    <>
      <Caption text="Отделение" />
      <div className="filter">

      </div>
    </>
  );
};

Filter.propTypes = {
  items: PropTypes.array,
};

export default Filter;
