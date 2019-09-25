import React from 'react';
import Fetcher from 'components/Fetcher';
import HomePage from './HomePage';

const WORKERS_URL = 'http://hetz3.dbrain.io:23008/workers';

const Component = () =>
  <Fetcher url={WORKERS_URL}>
    {({ data, isLoading, error }) => {
      if (!data) {
        return <p>No data yet ...</p>;
      }
      if (error) {
        return <p>{error.message}</p>;
      }
      if (isLoading) {
        return <p>Loading ...</p>;
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
