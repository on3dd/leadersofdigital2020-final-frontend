import { combineReducers } from 'redux';

import profileReducer from './profile.reducer';
import teamReducer from './team.reducer';
import teamsReducer from './teams.reducer';
import playerReducer from './player.reducer';
import playersReducer from './players.reducer';
import matchesReducer from './matches.reducer';

export default combineReducers({
  profile: profileReducer,
  team: teamReducer,
  teams: teamsReducer,
  player: playerReducer,
  players: playersReducer,
  matches: matchesReducer,
});
