import { Dispatch } from 'redux';

import { Team } from '@test';

import axiosService from '../utils/axiosService';

import {
  FETCHING_TEAM,
  FETCHING_TEAM_SUCCESS,
  FETCHING_TEAM_FAIL,
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
    tag: 'BRUH',
    photo_100:
      'https://upload.wikimedia.org/wikipedia/ru/2/2c/NAVI_logo.png',
    photo_200:
      'https://upload.wikimedia.org/wikipedia/ru/2/2c/NAVI_logo.png',
    photo_max_orig:
      'https://upload.wikimedia.org/wikipedia/ru/2/2c/NAVI_logo.png',
    rating: 0,
  },
}));

const fetchTeam = (id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCHING_TEAM });

    return sleep(500).then(() => {
      return dispatch({
        type: FETCHING_TEAM_SUCCESS,
        payload: data.find((el) => el.id === id),
      });
    });

    // return axiosService
    //   .get(API_ENDPOINTS.photos.id(id))
    //   .then((res) => {
    //     dispatch({
    //       type: FETCHING_TEAM_SUCCESS,
    //       payload: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     dispatch({
    //       type: FETCHING_TEAM_FAIL,
    //       payload: err,
    //     });
    //   });
  };
};

export default fetchTeam;
