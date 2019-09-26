import React from 'react';
import Fetcher from 'components/Fetcher';
import LoadingIndicator from 'components/LoadingIndicator';
import Error from 'containers/Error';
import HomePage from './HomePage';

const WORKERS_URL = 'https://history-api.mo.dbrain.io/workers';

const Component = () =>
  <Fetcher url={WORKERS_URL}>
    {({ data, isLoading, error }) => {
      if (error) {
          return <Error error={error.message} />;
        }
      if (isLoading || !data) {
        return <LoadingIndicator />;
      }

      const props = {
        data: {},
      };

      const departments = props.data;

      data.forEach(item => {
        const department = item.department;
        departments[department] = departments[department] || {};

        departments[department][item.id] = {
          dates: item.workdays_dates,
          name: item.name,
        };
      });

      return (
        <HomePage {...props} />
      );
    }}
  </Fetcher>

export default Component;
