import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Filter from 'components/Filter';
import ReposList from 'components/ReposList';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { username, onSubmitForm } = this.props;
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    console.log(this.props);


    return (
      <article>
        <Helmet>
          <title>Выбор трекера</title>
        </Helmet>

        <div className="home-page">
          <Filter />

          {/* <section>
            <h2>Try me!</h2>
            <form onSubmit={onSubmitForm}>
              <label htmlFor="username">
                <span className="at-prefix">@</span>
                <input
                  id="username"
                  type="text"
                  placeholder="flexdinesh"
                  value={username}
                  onChange={onChangeUsername}
                />
              </label>
            </form>
            <ReposList {...reposListProps} />
          </section> */}
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
