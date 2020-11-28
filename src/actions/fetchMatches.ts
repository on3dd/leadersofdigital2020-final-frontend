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
  { id: 3201, name: 'Аренда автомобилей' },
  { id: 3273, name: 'Автотовары' },
  { id: 3205, name: 'Автосалон' },
  { id: 3282, name: 'Автосервис' },
  { id: 3283, name: 'Услуги для автовладельцев' },
  { id: 3284, name: 'Велосипеды' },
  { id: 3285, name: 'Мотоциклы и другая мототехника' },
  { id: 3286, name: 'Водный транспорт' },
  { id: 3287, name: 'Автопроизводитель' },
  { id: 3288, name: 'Автомойка' },
  { id: 3117, name: 'Автошкола' },
  { id: 3118, name: 'Детский сад' },
  { id: 3119, name: 'Гимназия' },
  { id: 3120, name: 'Колледж' },
  { id: 3121, name: 'Лицей' },
  { id: 3122, name: 'Техникум' },
  { id: 3123, name: 'Университет' },
  { id: 3124, name: 'Школа' },
  { id: 3125, name: 'Институт' },
  { id: 3126, name: 'Обучающие курсы' },
  { id: 3276, name: 'Дополнительное образование' },
  { id: 3275, name: 'Тренинг, семинар' },
  { id: 3127, name: 'Танцевальная школа' },
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
