import React from 'react';
import { Link } from 'react-router-dom';
import { RossetiIcon } from 'components/Icons';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <div className="logo">
          <Link to="/">
            <RossetiIcon />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
