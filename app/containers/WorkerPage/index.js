import React from 'react';
import Fetcher from 'components/Fetcher';
import LoadingIndicator from 'components/LoadingIndicator';
import Error from 'containers/Error';
import WorkerPage from './WorkerPage';

const Component = ({ match }) => {
  const { params: { date, id } } = match;
  const WORKERS_URL = `https://history-moesk.ml.dbrain.io/workers/${id}/workdays/${date}`;

  return (
    <Fetcher url={WORKERS_URL}>
      {({ data, isLoading, error }) => {
        if (error) {
          return <Error error={error.message} />;
        }
        if (isLoading || !data) {
          return <LoadingIndicator />;
        }

        return (
          <WorkerPage {...data} />
        );
      }}
    </Fetcher>
  )
}

export default Component;
