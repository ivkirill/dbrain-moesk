import { createSelector } from 'reselect';
import { initialState } from 'reducers/app';

const selectGlobal = (state) => state.global || initialState;

const selectRoute = (state) => state.router;

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.currentUser
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.error
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  // (globalState) => globalState.userData.repositories
  (globalState) => {
    return {
      departaments: {
        'АВС': {
          'Петров АВ': {
            '2019.09.09': {

            },
            '2019.09.10': {

            },
            '2019.09.11': {

            },
            '2019.09.12': {

            },
            '2019.09.14': {

            },
          },
          'Сидоров ВУ': {
            '2019.09.01': {

            },
            '2019.09.03': {

            },
            '2019.09.04': {

            },
            '2019.09.05': {

            },
            '2019.09.07': {

            },
          },
          'Чехов КК': {
            '2019.09.11': {

            },
            '2019.09.12': {

            },
            '2019.09.13': {

            },
            '2019.09.14': {

            },
            '2019.09.15': {

            },
          },
        },
        'СВУ': {
          'Пяточкин ХК': {
            '2019.09.09': {

            },
            '2019.09.10': {

            },
            '2019.09.11': {

            },
            '2019.09.12': {

            },
            '2019.09.14': {

            },
          },
          'Бубнов ДЛ': {
            '2019.09.01': {

            },
            '2019.09.03': {

            },
            '2019.09.04': {

            },
            '2019.09.05': {

            },
            '2019.09.07': {

            },
          },
          'Дрозд ЕФ': {
            '2019.09.11': {

            },
            '2019.09.12': {

            },
            '2019.09.13': {

            },
            '2019.09.14': {

            },
            '2019.09.15': {

            },
          },
        },
        'ОТУ': {
          'Венедиктов ПА': {
            '2019.09.09': {

            },
            '2019.09.10': {

            },
            '2019.09.11': {

            },
            '2019.09.12': {

            },
            '2019.09.14': {

            },
          },
          'Кисляк АА': {
            '2019.09.01': {

            },
            '2019.09.03': {

            },
            '2019.09.04': {

            },
            '2019.09.05': {

            },
            '2019.09.07': {

            },
          },
          'Сулейманов ЗВ': {
            '2019.09.11': {

            },
            '2019.09.12': {

            },
            '2019.09.13': {

            },
            '2019.09.14': {

            },
            '2019.09.15': {

            },
          },
        },
      }
    };
  }
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.location
);

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
};
