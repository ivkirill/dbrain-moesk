import React, { If } from 'react';
import { Helmet } from 'react-helmet';
import Filter from 'components/Filter';
import Button from 'components/Button';
import Caption from 'components/Caption';
import Datepicker from 'components/Datepicker';
import './style.scss';

export default class HomePage extends React.PureComponent {
  state = {
    filters: {
      department: '',
      name: '',
      date: '',
    },

    departments: [],
    names: [],
    dates: [],
  }

  async componentDidMount() {
    const { data } = this.props;
    const departments = Object.keys(data).map(name => ({ value: name, name }));

    this.setState({ departments })
  }

  handleDepartment = (department) => {
    const { data } = this.props;

    const filters = {
      ...this.state.filters,
      department,
      name: '',
      date: '',
    }

    const names = Object.keys(data[department]).map(worker => {
      return { value: worker, name: data[department][worker].name };
    });

    this.setState({ filters, names });
  }

  handleName = (name) => {
    const { data } = this.props;
    const { filters: { department } } = this.state;

    const filters = {
      ...this.state.filters,
      name,
      date: '',
    }

    const dates = data[department][name].dates;
    this.setState({ filters, dates });
  }

  handleDate = (date) => {
    const { filters: { department, name } } = this.state;

    const filters = {
      ...this.state.filters,
      date,
    }

    this.setState({ filters });
  }

  getLink = () => {
    const { filters } = this.state;
    const { department, name, date } = filters;

    const id = '123';
    const date_fake = '2019-09-10';

    return `workers/${id}/workdays/${date_fake}`;
  }

  render() {
    const { filters, departments, names, dates } = this.state;
    const { department, name, date } = filters;

    return (
      <article>
        <Helmet>
          <title>Выбор трекера</title>
        </Helmet>

        <div className="home-page">
          <Caption text="Отделение" />
          <Filter onChange={this.handleDepartment} options={departments} active={department} />

          {department && (
            <>
              <Caption text="ФИО" />

              <Filter onChange={this.handleName} options={names} active={name} />
            </>
          )}

          {name && (
            <>
              <Caption text="Дата" />

              <div className="home-row">
                <Datepicker onChange={this.handleDate} options={dates} />

                {date &&
                  <Button color="blue" link={`workers/${name}/workdays/${date}`} text="Готово" />
                }
              </div>
            </>
          )}
        </div>
      </article>
    );
  }
}
