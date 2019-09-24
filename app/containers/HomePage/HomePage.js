import React, { If } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Filter from 'components/Filter';
import Button from 'components/Button';
import Caption from 'components/Caption';
import './style.scss';

export default class HomePage extends React.PureComponent {
  state = {
    filters: {
      departament: '',
      name: '',
      date: '',
    },

    departaments: [],
    names: [],
    dates: [],
  }

  componentDidMount() {
    const { repos } = this.props;
    const departaments = Object.keys(repos.departaments);

    this.setState({ departaments });
  }

  handleDepartament = (departament) => {
    const { repos } = this.props;
    const filters = {
      ...this.state.filters,
      departament,
      name: '',
      date: '',
    }

    const names = Object.keys(repos.departaments[departament]);

    this.setState({ filters, names });
  }

  handleName = (name) => {
    const { repos } = this.props;
    const { filters: { departament } } = this.state;

    const filters = {
      ...this.state.filters,
      name,
      date: '',
    }

    const dates = Object.keys(repos.departaments[departament][name]);

    this.setState({ filters, dates });
  }

  handleDate = (date) => {
    const { filters: { departament, name } } = this.state;

    const filters = {
      ...this.state.filters,
      date,
    }

    this.setState({ filters });
  }

  getLink = () => {
    const { filters } = this.state;
    const { departament, name, date } = filters;

    const id = '123';
    const date_fake = '2019-09-10';

    return `workers/${id}/workdays/${date_fake}`;
  }

  render() {
    const { filters, departaments, names, dates } = this.state;
    const { departament, name, date } = filters;

    const id = '123';
    const date_fake = '2019-09-10';
    const link = `workers/${id}/workdays/${date_fake}`;

    return (
      <article>
        <Helmet>
          <title>Выбор трекера</title>
        </Helmet>

        <div className="home-page">
          <Caption text="Отделение" />
          <Filter onChange={this.handleDepartament} options={departaments} active={departament} />

          {departament && (
            <>
              <Caption text="ФИО" />

              <Filter onChange={this.handleName} options={names} active={name} />
            </>
          )}

          {name && (
            <>
              <Caption text="Дата" />

              <div className="home-row">
                <Filter onChange={this.handleDate} options={dates} active={date} />

                {date &&
                  <Button color="blue" link={link} text="Готово" />
                }
              </div>
            </>
          )}
        </div>
      </article>
    );
  }
}

// HomePage.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
//   repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
//   onSubmitForm: PropTypes.func,
//   username: PropTypes.string,
//   onChangeUsername: PropTypes.func
// };
