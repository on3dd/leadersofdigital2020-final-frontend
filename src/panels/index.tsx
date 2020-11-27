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
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28MessageOutline,
  Icon28ClipOutline,
  Icon28UserCircleOutline,
} from '@vkontakte/icons';

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

  return (
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
            <Icon28NewsfeedOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname.includes('/teams')}
            data-story="/teams"
            text="Команды"
          >
            <Icon28ServicesOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname.includes('/players')}
            data-story="/players"
            label="12"
            text="Игроки"
          >
            <Icon28MessageOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname.includes('/matches')}
            data-story="/matches"
            text="Матчи"
          >
            <Icon28ClipOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname.includes('/ranks')}
            data-story="/ranks"
            text="Рейтинг"
          >
            <Icon28UserCircleOutline />
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
