import {
  FETCHING_MATCHES,
  FETCHING_MATCHES_SUCCESS,
  FETCHING_MATCHES_FAIL,
  CREATING_MATCH,
  CREATING_MATCH_SUCCESS,
  CREATING_MATCH_FAIL,
} from '../utils/actionTypes';

import { AsyncAction, MatchesState } from '@test';

const initialState: MatchesState = {
  data: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const matchesReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case FETCHING_MATCHES:
    case CREATING_MATCH:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_MATCHES_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_MATCHES_FAIL:
    case CREATING_MATCH_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    case CREATING_MATCH_SUCCESS:
      return Object.assign({}, state, {
        data: [...state.data, action.payload],
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default matchesReducer;
