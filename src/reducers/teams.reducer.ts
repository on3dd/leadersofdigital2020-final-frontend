import {
  FETCHING_TEAMS,
  FETCHING_TEAMS_SUCCESS,
  FETCHING_TEAMS_FAIL,
} from '../utils/actionTypes';

import { AsyncAction, TeamsState } from '@test';

const initialState: TeamsState = {
  data: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const teamsReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case FETCHING_TEAMS:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_TEAMS_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_TEAMS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default teamsReducer;
