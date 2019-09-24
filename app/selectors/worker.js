import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.username
);


const getWorkers = () => createSelector(
  selectHome,
  (homeState) => {


    return {

    }
  }
);

export {
  selectHome,
  makeSelectUsername,
  getWorkers,
};
