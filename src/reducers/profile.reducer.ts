import {
  FETCHING_PROFILE,
  FETCHING_PROFILE_SUCCESS,
  FETCHING_PROFILE_FAIL,
} from '../utils/actionTypes';

import { AsyncAction, ProfileState } from '@test';

const initialState: ProfileState = {
  data: {
    id: 0,
    city: { id: 0, title: '' },
    country: { id: 0, title: '' },
    first_name: 'Неопознанный',
    last_name: 'Пользователь',
    photo_100: 'https://vk.com/images/camera_100.png?ava=1',
    photo_200: 'https://vk.com/images/camera_200.png?ava=1',
    photo_max_orig:
      'https://vk.com/images/camera_200.png?ava=1',
    sex: 2,
    timezone: 0,
    team_id: 0,
    steam_id: 0,
  },
  isFetching: false,
  hasError: false,
  errorMessage: null,
};

const profileReducer = (
  state = initialState,
  action: AsyncAction,
) => {
  switch (action.type) {
    case FETCHING_PROFILE:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        data: action.payload,
        isFetching: false,
        hasError: false,
        errorMessage: null,
      });

    case FETCHING_PROFILE_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default profileReducer;
