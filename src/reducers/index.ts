import { combineReducers } from 'redux';

import photosReducer from './photos.reducer';
import photoReducer from './photo.reducer';
import profileReducer from './profile.reducer';
import teamsReducer from './teams.reducer';
import playersReducer from './players.reducer';

export default combineReducers({
  photos: photosReducer,
  photo: photoReducer,
  profile: profileReducer,
  teams: teamsReducer,
  players: playersReducer,
});
