import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Calendar from 'react-calendar';

import Button from 'components/Button';

import './style.scss';

class Datepicker extends React.PureComponent {
  state = {
    date: null,
    open: false,
  }

  onChange = date => {
    const { onChange } = this.props;
    this.setState({ date, open: false });

    if (onChange) {
      onChange(date);
    }
  }

  onClick = () => this.setState({ open: !this.state.open });

  render() {
    const { options, onChange } = this.props;
    const { date: currentDate, open } = this.state;

    const value = currentDate && String(currentDate) || 'Выберите';
    const calendarClassNames = cn('calendar', open && 'open');

    return (
      <div className="datepicker">
        <Button text={value} onClick={this.onClick} />

        {open &&
          <Calendar
            className={calendarClassNames}
            tileClassName="calendar-tile"
            onChange={this.onChange}
            value={currentDate}
            locale="ru-RU"
          />
        }
      </div>
    );
  }
};

Datepicker.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default Datepicker;
