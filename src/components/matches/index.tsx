import React, {
  ChangeEvent,
  SyntheticEvent,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { useHistory } from 'react-router-dom';

import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import List from '@vkontakte/vkui/dist/components/List/List';
import RichCell from '@vkontakte/vkui/dist/components/RichCell/RichCell';
import Button from '@vkontakte/vkui/dist/components/Button/Button';

import Headline from '@vkontakte/vkui/dist/components/Typography/Headline/Headline';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import Header from '@vkontakte/vkui/dist/components/Header/Header';

type MatchProps = {
  live?: boolean;
  date?: string;
};

const Match: React.FC<MatchProps> = ({ live, date }) => (
  <RichCell>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <Avatar src="https://upload.wikimedia.org/wikipedia/ru/2/2c/NAVI_logo.png" />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="top-row" style={{}}>
          <Headline weight="semibold">
            {"Na'Vi | Alliance".toUpperCase()}
          </Headline>
        </div>

        <div className="top-row">
          <Text
            weight={live ? 'semibold' : 'regular'}
            style={{
              color: live ? 'red' : 'rgb(129, 140, 153)',
              fontSize: '0.9rem',
            }}
          >
            {live ? 'LIVE' : date}
          </Text>
        </div>
      </div>
      <div>
        <Avatar src="https://i.imgur.com/H7jhECD.png" />
      </div>
    </div>
  </RichCell>
);

const Profile: React.FC = () => {
  const history = useHistory();

  const onClick = useCallback(
    (e: SyntheticEvent<HTMLElement>) => {
      console.log('redirecting...');
      return history.push('/players/1');
    },
    [history],
  );

  return (
    <Div>
      <Group title="Create" separator="show">
        <Button
          stretched
          size="xl"
          style={{ marginTop: 0 }}
        >
          Создать матч
        </Button>
      </Group>
      <Group
        title="Search"
        header={<Header>Текущие матчи</Header>}
      >
        <List>
          <Match live={true} />
          <Match date={'28.11, 15:00'} />
          <Match date={'28.11, 15:30'} />
          <Match date={'28.11, 16:00'} />
          <Match date={'28.11, 16:30'} />
          <Match date={'28.11, 17:00'} />
        </List>
      </Group>
    </Div>
  );
};

export default Profile;
