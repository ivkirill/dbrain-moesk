import React from 'react';
import { Link } from 'react-router-dom';
import { Logo, CrossIcon, RossetiIcon } from 'components/Icons';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="delimiter">
          <CrossIcon />
        </div>
        <div className="moesk">
          <RossetiIcon />
        </div>
      </div>
    );
  }
}

export default Header;
