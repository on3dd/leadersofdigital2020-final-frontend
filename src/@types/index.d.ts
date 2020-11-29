declare module '*.png';

declare module '@test' {
  import React from 'react';
  import { AnyAction } from 'redux';

  import { UserInfo } from '@vkontakte/vk-bridge';

  export interface Action extends AnyAction {
    type: string;
    payload: any;
  }

  export interface AsyncAction extends Action {
    err: string;
  }

  export type User = UserInfo | null;
  export type Popout = React.ReactNode;

  export interface Profile extends UserInfo {
    team_id: number;
    steam_id: number;
  }

  export interface Team {
    id: number;
    title: string;
    tag: string;
    photo_100: string;
    photo_200: string;
    photo_max_orig: string;
    rating: number;
    match_id?: number;
  }

  export interface Player extends UserInfo {
    team_id: number;
    steam_id: number;
  }

  export interface Match {
    id: 3201;
    team_left: "Na'Vi";
    team_left_image: '';
    team_right: 'Alliance';
    team_right_image: '';
    live: true;
    date: '';
  }

  export type Modal = string | null;

  export interface ModalTypes {
    STATISTICS: 'STATISTICS';
    LAST_GAMES: 'LAST_GAMES';
    ACHIEVEMENTS: 'ACHIEVEMENTS';
    MATCH_SCHEDULE: 'MATCH_SCHEDULE';
    CREATE_MATCH: 'CREATE_MATCH';
    INSPECT_MATCH: 'INSPECT_MATCH';
    SELECT_TEAM: 'SELECT_TEAM';
  }

  export interface State<T> {
    data: T;
    isFetching: boolean;
    hasError: boolean;
    errorMessage: null | string;
  }

  export interface ProfileState extends State<Profile> {}
  export interface TeamState extends State<Team> {}
  export interface TeamsState extends State<Team[]> {}
  export interface PlayerState extends State<Player> {}
  export interface PlayersState extends State<Player[]> {}
  export interface MatchesState extends State<Match[]> {}

  export interface RootState {
    profile: ProfileState;
    team: TeamState;
    teams: TeamsState;
    player: PlayerState;
    players: PlayersState;
    matches: MatchesState;
  }

  export interface ChildProps {
    id: string;
  }
}
