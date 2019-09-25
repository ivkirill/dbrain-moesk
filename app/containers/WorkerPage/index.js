import React from 'react';
import Fetcher from 'components/Fetcher';
import WorkerPage from './WorkerPage';

const Component = ({ match }) => {
  const { params: { date, id } } = match;
  const WORKERS_URL = `http://hetz3.dbrain.io:23008/workers/${id}/workdays/${date}`;

  return (
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

        return (
          <WorkerPage {...data} />
        );
      }}
    </Fetcher>
  )
}

export default Component;
