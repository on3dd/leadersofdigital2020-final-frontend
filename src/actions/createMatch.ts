// import { Dispatch } from 'redux';

import { RootState } from '@test';
import { Dispatch } from '@test/thunk';

import axiosService from '../utils/axiosService';

import fetchTeams from './fetchTeams';

import {
  CREATING_MATCH,
  CREATING_MATCH_SUCCESS,
  CREATING_MATCH_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

type TeamDraft = {
  team_left_id: number;
  team_right_id: number;
  date: string;
  time: string;
};

const createMatch = (data: TeamDraft) => {
  return async (
    dispatch: Dispatch,
    getState: () => RootState,
  ) => {
    dispatch({ type: CREATING_MATCH });

    console.log('====================================');
    console.log('create data', data);
    console.log('====================================');

    const teams = getState().teams.data;

    const team_left = teams.find(
      (el) => el.id === data.team_left_id,
    );

    const team_right = teams.find(
      (el) => el.id === data.team_right_id,
    );

    const id = teams[teams.length - 1].id + 1;

    return sleep(500).then(() => {
      return dispatch({
        type: CREATING_MATCH_SUCCESS,
        payload: {
          id,
          team_left: team_left?.title || 'Неизвестно',
          team_left_image: team_left?.photo_100 || '',
          team_right: team_right?.title || 'Неизвестно',
          team_right_image: team_right?.photo_100 || '',
          live: false,
          date: data.date,
        },
      });
    });

    // return axiosService
    //   .get(API_ENDPOINTS.photos.id(id))
    //   .then((res) => {
    //     dispatch({
    //       type: CREATING_MATCH_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: CREATING_MATCH_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default createMatch;
