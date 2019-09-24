import React from 'react';
import { Logo, CrossIcon} from 'components/Icons';
import MOESK from 'images/MOESK.png';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <div className="logo">
          <Logo />
        </div>
        <div className="delimiter">
          <CrossIcon />
        </div>
        <div className="moesk">
          <img src={MOESK} width="116" height="32" />
        </div>
      </div>
    );
  }
}

export default Header;
