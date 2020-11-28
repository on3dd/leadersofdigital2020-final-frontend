import { Dispatch } from 'redux';

import { User } from '@test';

import axiosService from '../utils/axiosService';

import {
  FETCHING_TEAMS,
  FETCHING_TEAMS_SUCCESS,
  FETCHING_TEAMS_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';

const fetchTeams = (data: User) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCHING_TEAMS });

    return axiosService
      .post(API_ENDPOINTS.register, data)
      .then((res) => {
        console.log('register res', res);

        dispatch({
          type: FETCHING_TEAMS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCHING_TEAMS_FAIL,
          payload: err,
        });
      });
  };
};

export default fetchTeams;
