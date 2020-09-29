import { Dispatch } from 'redux';

import { Team } from '@test';

import axiosService from '../utils/axiosService';

import {
  FETCHING_TEAMS,
  FETCHING_TEAMS_SUCCESS,
  FETCHING_TEAMS_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

const data = [
  {
    id: 1,
    title: 'Virtus.Pro',
    photo_100:
      'https://upload.wikimedia.org/wikipedia/ru/4/4f/Virtus.proLogo.png',
    photo_200:
      'https://upload.wikimedia.org/wikipedia/ru/4/4f/Virtus.proLogo.png',
    photo_max_orig:
      'https://upload.wikimedia.org/wikipedia/ru/4/4f/Virtus.proLogo.png',
  },
  {
    id: 3201,
    title: 'Nigma',
    photo_100:
      'https://images.prismic.io/rivalryglhf/79e23f1b-fc88-4ddd-bee2-de7f1a45028a_nigma.jpg?auto=compress,format',
    photo_200:
      'https://images.prismic.io/rivalryglhf/79e23f1b-fc88-4ddd-bee2-de7f1a45028a_nigma.jpg?auto=compress,format',
    photo_max_orig:
      'https://images.prismic.io/rivalryglhf/79e23f1b-fc88-4ddd-bee2-de7f1a45028a_nigma.jpg?auto=compress,format',
  },
  {
    id: 3273,
    title: 'Liquid',
    photo_100:
      'https://pbs.twimg.com/profile_images/898236182215221248/W22xXcbK.jpg',
    photo_200:
      'https://pbs.twimg.com/profile_images/898236182215221248/W22xXcbK.jpg',
    photo_max_orig:
      'https://pbs.twimg.com/profile_images/898236182215221248/W22xXcbK.jpg',
  },
  {
    id: 3205,
    title: 'Natus Vincere',
    photo_100:
      'https://cdn1.dotesports.com/wp-content/uploads/2019/07/24154332/navi.jpg',
    photo_200:
      'https://cdn1.dotesports.com/wp-content/uploads/2019/07/24154332/navi.jpg',
    photo_max_orig:
      'https://cdn1.dotesports.com/wp-content/uploads/2019/07/24154332/navi.jpg',
  },
  {
    id: 3282,
    title: 'Gambit',
    photo_100:
      'https://assets.faceit-cdn.net/teams_avatars/c871c10d-3a82-4c32-ac5b-10a8d347dde9_1550802243160.jpg',
    photo_200:
      'https://assets.faceit-cdn.net/teams_avatars/c871c10d-3a82-4c32-ac5b-10a8d347dde9_1550802243160.jpg',
    photo_max_orig:
      'https://assets.faceit-cdn.net/teams_avatars/c871c10d-3a82-4c32-ac5b-10a8d347dde9_1550802243160.jpg',
  },
].map((el) => ({
  ...el,
  ...{
    tag: 'BRUH',
    rating: 0,
  },
}));

const fetchTeams = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCHING_TEAMS });

    return sleep(500).then(() => {
      console.log('then data', data);

      return dispatch({
        type: FETCHING_TEAMS_SUCCESS,
        payload: data,
      });
    });

    // return axiosService
    //   .get(API_ENDPOINTS.photos.id(id))
    //   .then((res) => {
    //     dispatch({
    //       type: FETCHING_TEAMS_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: FETCHING_TEAMS_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default fetchTeams;
