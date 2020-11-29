import React, {
  SyntheticEvent,
  useMemo,
  useCallback,
} from 'react';

import { useLocation, useHistory } from 'react-router-dom';

import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';

import {
  Icon28UserCircleOutline,
  Icon28Users3Outline,
  Icon28UsersOutline,
  Icon28GameOutline,
  Icon28FavoriteOutline,
} from '@vkontakte/icons';

import OnboardingPanel from './Onboarding';
import ProfilePanel from './Profile';
import TeamsPanel from './Teams';
import PlayersPanel from './Players';
import MatchesPanel from './Matches';
import RanksPanel from './Ranks';

const Index: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const pathname = useMemo(() => {
    return location.pathname;
  }, [location.pathname]);

  const activeStory = useMemo(() => {
    return pathname.split('/').slice(1)[0];
  }, [pathname]);

  const onClick = useCallback(
    (evt: SyntheticEvent<HTMLElement>) => {
      const path = evt?.currentTarget?.dataset?.story;
      return path ? history.push(path) : undefined;
    },
    [history],
  );

  return pathname === '/' ? (
    <OnboardingPanel id="/" />
  ) : (
    <Epic
      activeStory={activeStory}
      tabbar={
        <Tabbar>
          <TabbarItem
            onClick={onClick}
            selected={pathname.includes('/profile')}
            data-story="/profile"
            text="Профиль"
          >
            <Icon28UserCircleOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname.includes('/teams')}
            data-story="/teams"
            label="12"
            text="Команды"
          >
            <Icon28Users3Outline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname.includes('/players')}
            data-story="/players"
            text="Игроки"
          >
            <Icon28UsersOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname.includes('/matches')}
            data-story="/matches"
            text="Матчи"
          >
            <Icon28GameOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname.includes('/ranks')}
            data-story="/ranks"
            text="Рейтинг"
          >
            <Icon28FavoriteOutline />
          </TabbarItem>
        </Tabbar>
      }
    >
      <ProfilePanel id="profile" />
      <TeamsPanel id="teams" />
      <PlayersPanel id="players" />
      <MatchesPanel id="matches" />
      <RanksPanel id="ranks" />
    </Epic>
  );
};

export default Index;
