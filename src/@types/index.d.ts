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

  export interface Photo {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  export interface Profile extends UserInfo {
    team_id: number;
    steam_id: number;
  }

  export type Modal = string | null;

  export interface ModalTypes {
    STATISTICS: 'STATISTICS';
    LAST_GAMES: 'LAST_GAMES';
    ACHIEVEMENTS: 'ACHIEVEMENTS';
    MATCH_SCHEDULE: 'MATCH_SCHEDULE';
    CREATE_MATCH: 'CREATE_MATCH';
    INSPECT_MATCH: 'INSPECT_MATCH';
  }

  export interface State<T> {
    data: T;
    isFetching: boolean;
    hasError: boolean;
    errorMessage: null | string;
  }

  export interface PhotosState extends State<Photo[]> {}
  export interface PhotoState extends State<Photo> {}
  export interface ProfileState extends State<Profile> {}

  export interface RootState {
    photos: PhotosState;
    photo: PhotoState;
    profile: ProfileState;
  }
}
