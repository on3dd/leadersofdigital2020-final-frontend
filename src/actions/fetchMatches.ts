import { Dispatch } from 'redux';

// import { Dispatch } from '@test/thunk';

import axiosService from '../utils/axiosService';

import {
  FETCHING_MATCHES,
  FETCHING_MATCHES_SUCCESS,
  FETCHING_MATCHES_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

const data = [
  {
    id: 3201,
    team_left: "Na'Vi",
    team_left_image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/NaVi_logo.svg/1200px-NaVi_logo.svg.png',
    team_right: 'Alliance',
    team_right_image:
      'https://pbs.twimg.com/profile_images/1323175247055564800/bjOJr3VD.jpg',
    live: true,
    date: '',
  },
  {
    id: 3202,
    team_left: 'VP.P',
    team_left_image:
      'https://pbs.twimg.com/profile_images/1245452558627409921/gtBLseMT_400x400.jpg',
    team_right: 'Nigma',
    team_right_image:
      'https://images.prismic.io/rivalryglhf/79e23f1b-fc88-4ddd-bee2-de7f1a45028a_nigma.jpg?auto=compress,format',
    live: true,
    date: '',
  },
  {
    id: 3203,
    team_left: "Na'Vi",
    team_left_image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/NaVi_logo.svg/1200px-NaVi_logo.svg.png',
    team_right: 'Alliance',
    team_right_image:
      'https://pbs.twimg.com/profile_images/1323175247055564800/bjOJr3VD.jpg',
    live: false,
    date: '30.11 15:00',
  },
  {
    id: 3204,
    team_left: 'VP.P',
    team_left_image:
      'https://pbs.twimg.com/profile_images/1245452558627409921/gtBLseMT_400x400.jpg',
    team_right: 'Nigma',
    team_right_image:
      'https://images.prismic.io/rivalryglhf/79e23f1b-fc88-4ddd-bee2-de7f1a45028a_nigma.jpg?auto=compress,format',
    live: false,
    date: '30.11 16:00',
  },
  {
    id: 3205,
    team_left: "Na'Vi",
    team_left_image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/NaVi_logo.svg/1200px-NaVi_logo.svg.png',
    team_right: 'Alliance',
    team_right_image:
      'https://pbs.twimg.com/profile_images/1323175247055564800/bjOJr3VD.jpg',
    live: false,
    date: '30.11 17:00',
  },
  {
    id: 3206,
    team_left: 'VP.P',
    team_left_image:
      'https://pbs.twimg.com/profile_images/1245452558627409921/gtBLseMT_400x400.jpg',
    team_right: 'Nigma',
    team_right_image:
      'https://images.prismic.io/rivalryglhf/79e23f1b-fc88-4ddd-bee2-de7f1a45028a_nigma.jpg?auto=compress,format',
    live: false,
    date: '30.11 18:00',
  },
  {
    id: 3207,
    team_left: "Na'Vi",
    team_left_image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/NaVi_logo.svg/1200px-NaVi_logo.svg.png',
    team_right: 'Alliance',
    team_right_image:
      'https://pbs.twimg.com/profile_images/1323175247055564800/bjOJr3VD.jpg',
    live: false,
    date: '30.11 19:00',
  },
  {
    id: 3208,
    team_left: 'VP.P',
    team_left_image:
      'https://pbs.twimg.com/profile_images/1245452558627409921/gtBLseMT_400x400.jpg',
    team_right: 'Nigma',
    team_right_image:
      'https://images.prismic.io/rivalryglhf/79e23f1b-fc88-4ddd-bee2-de7f1a45028a_nigma.jpg?auto=compress,format',
    live: false,
    date: '31.11 14:00',
  },
  {
    id: 3209,
    team_left: "Na'Vi",
    team_left_image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/NaVi_logo.svg/1200px-NaVi_logo.svg.png',
    team_right: 'Alliance',
    team_right_image:
      'https://pbs.twimg.com/profile_images/1323175247055564800/bjOJr3VD.jpg',
    live: false,
    date: '31.11 15:00',
  },
  {
    id: 3210,
    team_left: 'VP.P',
    team_left_image:
      'https://pbs.twimg.com/profile_images/1245452558627409921/gtBLseMT_400x400.jpg',
    team_right: 'Nigma',
    team_right_image:
      'https://images.prismic.io/rivalryglhf/79e23f1b-fc88-4ddd-bee2-de7f1a45028a_nigma.jpg?auto=compress,format',
    live: false,
    date: '31.11 16:00',
  },
];

const fetchMatches = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCHING_MATCHES });

    return sleep(500).then(() => {
      return dispatch({
        type: FETCHING_MATCHES_SUCCESS,
        payload: data,
      });
    });

    // return axiosService
    //   .get(API_ENDPOINTS.photos.id(id))
    //   .then((res) => {
    //     dispatch({
    //       type: FETCHING_MATCHES_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: FETCHING_MATCHES_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default fetchMatches;
