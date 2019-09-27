/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { HomePage, WorkerPage, NotFoundPage } from 'containers';

import Header from 'components/Header';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s"
      defaultTitle=""
    >
    </Helmet>

    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/workers/:id/workdays/:date" component={WorkerPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
