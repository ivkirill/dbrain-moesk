import React from 'react';
import Caption from 'components/Caption';
import './style.scss';

const Error = ({ error }) => (
  <div className="error">
    <Caption text={error} />
  </div>
);

export default Error;
