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

import NewsPanel from './News';
import ServicesPanel from './Services';
import MessagesPanel from './Messages';
import ClipsPanel from './Clips';
import ProfilePanel from './Profile';

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
            selected={pathname.includes('/news')}
            data-story="/news"
            text="Новости"
          >
            <Icon28NewsfeedOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname.includes('/services')}
            data-story="/services"
            text="Сервисы"
          >
            <Icon28ServicesOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname.includes('/messages')}
            data-story="/messages"
            label="12"
            text="Сообщения"
          >
            <Icon28MessageOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname.includes('/clips')}
            data-story="/clips"
            text="Клипы"
          >
            <Icon28ClipOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname.includes('/profile')}
            data-story="/profile"
            text="Профиль"
          >
            <Icon28UserCircleOutline />
          </TabbarItem>
        </Tabbar>
      }
    >
      <NewsPanel id="news" />

      <ServicesPanel id="services" />

      <MessagesPanel id="messages" />

      <ClipsPanel id="clips" />

      <ProfilePanel id="profile" />
    </Epic>
  );
};

export default Index;
