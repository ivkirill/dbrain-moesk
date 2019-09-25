import Loadable from 'react-loadable';
import LoadingIndicator from 'components/LoadingIndicator';
import HomePage from 'containers/HomePage';

// const HomePage = Loadable({
//   loader: () => import('containers/HomePage'),
//   loading: LoadingIndicator,
// });

const WorkerPage = Loadable({
  loader: () => import('containers/WorkerPage'),
  loading: LoadingIndicator,
});

const NotFoundPage = Loadable({
  loader: () => import('containers/NotFoundPage'),
  loading: LoadingIndicator,
});

export {
  HomePage,
  WorkerPage,
  NotFoundPage,
}
