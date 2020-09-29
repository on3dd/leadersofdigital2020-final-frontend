import { Dispatch } from 'redux';

import { Player } from '@test';

import axiosService from '../utils/axiosService';

import {
  FETCHING_PLAYER,
  FETCHING_PLAYER_SUCCESS,
  FETCHING_PLAYER_FAIL,
} from '../utils/actionTypes';

import { API_ENDPOINTS } from '../utils/constants';
import { sleep } from '../utils/functions';

const data = [
  {
    id: 3201,
    title: 'Владимир Миненко',
    photo_100:
      'https://pbs.twimg.com/profile_images/1280494492974493698/KqYCFM3j.jpg',
    photo_200:
      'https://pbs.twimg.com/profile_images/1280494492974493698/KqYCFM3j.jpg',
    photo_max_orig:
      'https://pbs.twimg.com/profile_images/1280494492974493698/KqYCFM3j.jpg',
  },
  {
    id: 3273,
    title: 'Ярослав Кузнецов',
    photo_100:
      'https://svirtus.cdnvideo.ru/L2ZJJzbJEwtgU4_PZnd5Z898hHg=/0x0:303x298/200x200/filters:quality(100)/https://hb.bizmrg.com/esports-core-media/6f/6fe7493cfb1cff1adc6b6234eb58983e.png?m=d5c4e696abecfd6a51763c743f7d1caf',
    photo_200:
      'https://svirtus.cdnvideo.ru/L2ZJJzbJEwtgU4_PZnd5Z898hHg=/0x0:303x298/200x200/filters:quality(100)/https://hb.bizmrg.com/esports-core-media/6f/6fe7493cfb1cff1adc6b6234eb58983e.png?m=d5c4e696abecfd6a51763c743f7d1caf',
    photo_max_orig:
      'https://svirtus.cdnvideo.ru/L2ZJJzbJEwtgU4_PZnd5Z898hHg=/0x0:303x298/200x200/filters:quality(100)/https://hb.bizmrg.com/esports-core-media/6f/6fe7493cfb1cff1adc6b6234eb58983e.png?m=d5c4e696abecfd6a51763c743f7d1caf',
  },
  {
    id: 3205,
    title: 'Даниил Ишутин',
    photo_100:
      'https://cdn.vox-cdn.com/thumbor/GdW2s_q8FXW1s_jhP1XCUm7eZ_k=/0x0:492x554/1200x800/filters:focal(184x147:262x225)/cdn.vox-cdn.com/uploads/chorus_image/image/61133845/dendi_navi.0.png',
    photo_200:
      'https://cdn.vox-cdn.com/thumbor/GdW2s_q8FXW1s_jhP1XCUm7eZ_k=/0x0:492x554/1200x800/filters:focal(184x147:262x225)/cdn.vox-cdn.com/uploads/chorus_image/image/61133845/dendi_navi.0.png',
    photo_max_orig:
      'https://cdn.vox-cdn.com/thumbor/GdW2s_q8FXW1s_jhP1XCUm7eZ_k=/0x0:492x554/1200x800/filters:focal(184x147:262x225)/cdn.vox-cdn.com/uploads/chorus_image/image/61133845/dendi_navi.0.png',
  },
  {
    id: 3283,
    title: 'Алексей Березин',
    photo_100:
      'https://svirtus.cdnvideo.ru/9i4c5Pntrp87aoEYUmy_YZn_R4U=/0x0:600x600/200x200/filters:quality(100)/https://hb.bizmrg.com/esports-core-media/60/60f9a197c83a2f4f58bb42051e7bcb55.png?m=30898fb3dfd1c1edf2c6be47bdd9eaac',
    photo_200:
      'https://svirtus.cdnvideo.ru/9i4c5Pntrp87aoEYUmy_YZn_R4U=/0x0:600x600/200x200/filters:quality(100)/https://hb.bizmrg.com/esports-core-media/60/60f9a197c83a2f4f58bb42051e7bcb55.png?m=30898fb3dfd1c1edf2c6be47bdd9eaac',
    photo_max_orig:
      'https://svirtus.cdnvideo.ru/9i4c5Pntrp87aoEYUmy_YZn_R4U=/0x0:600x600/200x200/filters:quality(100)/https://hb.bizmrg.com/esports-core-media/60/60f9a197c83a2f4f58bb42051e7bcb55.png?m=30898fb3dfd1c1edf2c6be47bdd9eaac',
  },
  {
    id: 3284,
    title: 'Олег Газманов',
    photo_100:
      'https://upload.wikimedia.org/wikipedia/commons/9/94/Oleg_Gazmanov_30_October_2010.jpg',
    photo_200:
      'https://upload.wikimedia.org/wikipedia/commons/9/94/Oleg_Gazmanov_30_October_2010.jpg',
    photo_max_orig:
      'https://upload.wikimedia.org/wikipedia/commons/9/94/Oleg_Gazmanov_30_October_2010.jpg',
  },
];

const fetchPlayer = (id: number | string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCHING_PLAYER });

    return sleep(500).then(() => {
      return dispatch({
        type: FETCHING_PLAYER_SUCCESS,
        payload: data.find((el) => el.id.toString() === id),
      });
    });

    // return axiosService
    //   .get(API_ENDPOINTS.photos.id(id))
    //   .then((res) => {
    //     dispatch({
    //       type: FETCHING_PLAYER_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: FETCHING_PLAYER_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default fetchPlayer;
