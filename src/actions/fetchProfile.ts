import { Dispatch } from 'redux';

// import { Dispatch } from '@test/thunk';

import bridge from '@vkontakte/vk-bridge';

import axiosService from '../utils/axiosService';

import {
  FETCHING_PROFILE,
  FETCHING_PROFILE_SUCCESS,
  FETCHING_PROFILE_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

const fetchProfile = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCHING_PROFILE });

    return bridge
      .send('VKWebAppGetUserInfo')
      .then((res) => {
        console.log('res', res);

        return dispatch({
          type: FETCHING_PROFILE_SUCCESS,
          payload: { ...res, team_id: 1 },
        });
      });

    // return axiosService
    //   .get(API_ENDPOINTS.photos.id(id))
    //   .then((res) => {
    //     dispatch({
    //       type: FETCHING_PROFILE_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: FETCHING_PROFILE_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default fetchProfile;
