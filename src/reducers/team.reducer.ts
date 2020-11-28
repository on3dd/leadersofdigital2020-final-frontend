import {
  FETCHING_TEAM,
  FETCHING_TEAM_SUCCESS,
  FETCHING_TEAM_FAIL,
} from '../utils/actionTypes';

import { AsyncAction, TeamState } from '@test';

const initialState: TeamState = {
  data: {
    id: 0,
    title: 'Неопознанная команда',
    tag: 'NONAME',
    photo_100: '',
    photo_200: '',
    photo_max_orig: '',
    rating: 0,
  },
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const teamReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case FETCHING_TEAM:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_TEAM_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_TEAM_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default teamReducer;
