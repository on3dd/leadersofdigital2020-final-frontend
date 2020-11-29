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
  { id: 3201, title: 'Аренда автомобилей' },
  { id: 3273, title: 'Автотовары' },
  { id: 3205, title: 'Автосалон' },
  { id: 3282, title: 'Автосервис' },
  { id: 3283, title: 'Услуги для автовладельцев' },
  { id: 3284, title: 'Велосипеды' },
  { id: 3285, title: 'Мотоциклы и другая мототехника' },
  { id: 3286, title: 'Водный транспорт' },
  { id: 3287, title: 'Автопроизводитель' },
  { id: 3288, title: 'Автомойка' },
  { id: 3117, title: 'Автошкола' },
  { id: 3118, title: 'Детский сад' },
  { id: 3119, title: 'Гимназия' },
  { id: 3120, title: 'Колледж' },
  { id: 3121, title: 'Лицей' },
  { id: 3122, title: 'Техникум' },
  { id: 3123, title: 'Университет' },
  { id: 3124, title: 'Школа' },
  { id: 3125, title: 'Институт' },
  { id: 3126, title: 'Обучающие курсы' },
  { id: 3276, title: 'Дополнительное образование' },
  { id: 3275, title: 'Тренинг, семинар' },
  { id: 3127, title: 'Танцевальная школа' },
].map((el) => ({
  ...el,
  ...{
    photo_100:
      'https://pbs.twimg.com/profile_images/1280494492974493698/KqYCFM3j.jpg',
    photo_200:
      'https://pbs.twimg.com/profile_images/1280494492974493698/KqYCFM3j.jpg',
    photo_max_orig:
      'https://pbs.twimg.com/profile_images/1280494492974493698/KqYCFM3j.jpg',
  },
}));

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
