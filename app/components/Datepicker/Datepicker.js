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
      onChange(new Date(date).toISOString().substring(0, 10));
    }
  }

  onClick = () => this.setState({ open: !this.state.open });

  convertDate = (date) => {
    return new Intl.DateTimeFormat('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }).format(date);
  }

  setDisabledDates = ({ date, view }) => {
    const { options } = this.props;

    if (view === 'month') {
      const tile = new Date(date).toISOString().substring(0, 10);

      return !options.some(item => item === tile);
    }

    if (view === 'year') {
      const tile = new Date(date).toISOString().substring(0, 7);

      return !options.some(item => item.startsWith(tile));
    }

    return false;
  }

  render() {
    const { options, onChange } = this.props;
    const { date: currentDate, open } = this.state;

    const value = currentDate && this.convertDate(currentDate) || 'Выберите';
    const calendarClassNames = cn('calendar', open && 'open');

    return (
      <div className="datepicker">
        <Button isActive={Boolean(currentDate)} text={value} onClick={this.onClick} />

        {open &&
          <Calendar
            className={calendarClassNames}
            tileClassName="calendar-tile"
            onChange={this.onChange}
            value={currentDate}
            locale="ru-RU"
            tileDisabled={this.setDisabledDates}
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
