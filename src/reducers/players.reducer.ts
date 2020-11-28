import {
  FETCHING_PLAYERS,
  FETCHING_PLAYERS_SUCCESS,
  FETCHING_PLAYERS_FAIL,
} from '../utils/actionTypes';

import { AsyncAction, PlayersState } from '@test';

const initialState: PlayersState = {
  data: [],
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const playersReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case FETCHING_PLAYERS:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_PLAYERS_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_PLAYERS_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default playersReducer;
