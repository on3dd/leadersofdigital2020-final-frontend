import { combineReducers } from 'redux';

import photosReducer from './photos.reducer';
import photoReducer from './photo.reducer';
import profileReducer from './profile.reducer';

export default combineReducers({
  photos: photosReducer,
  photo: photoReducer,
  profile: profileReducer,
});
