import { ModalTypes } from '@test';

export const API_BASE_URL = 'http://128.199.204.187:8081/';

const API_QUERY = {
  first: `?_limit=100`,
  second: `&_limit=100`,
};

export const API_ENDPOINTS = {
  photos: {
    index: '/photos' + API_QUERY.first,
    id: (id: number) =>
      `/photos/?id=${id}` + API_QUERY.second,
  },
  register: '/user/register',
  login: '/user/login',
};

// For using with min-width media query
export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1366px',
  desktop: '1680px',
};

export const MODAL_TYPES: ModalTypes = {
  STATISTICS: 'STATISTICS',
  LAST_GAMES: 'LAST_GAMES',
  ACHIEVEMENTS: 'ACHIEVEMENTS',
  MATCH_SCHEDULE: 'MATCH_SCHEDULE',
  CREATE_MATCH: 'CREATE_MATCH',
  INSPECT_MATCH: 'INSPECT_MATCH',
};

export const MODAL_TITLES = {
  STATISTICS: 'Статистика',
  LAST_GAMES: 'Предыдущие матчи',
  ACHIEVEMENTS: 'Достижения',
  MATCH_SCHEDULE: 'Расписание матчей',
  CREATE_MATCH: 'Создание матча',
  INSPECT_MATCH: 'Посмотреть матч',
};
