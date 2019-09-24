import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './style.scss';


class Button extends React.PureComponent {
  handleClick = () => {
    const { onClick, text } = this.props;

    if (!onClick) {
      return;
    }

    return onClick(text);
  }

  render() {
    const { text, link, className, color, isActive = false, isFade = false } = this.props;
    const classNames = cn('button', className, color, isActive && 'active', isFade && 'fade');

    if (link) {
      return (
        <Link className={classNames} to={link}>
          {text}
        </Link>
      );
    }

    return (
      <div className={classNames} onClick={this.handleClick}>
        {text}
      </div>
    );
  }
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  color: PropTypes.string,
  isActive: PropTypes.bool,
  isFade: PropTypes.bool,
};

export default Button;
