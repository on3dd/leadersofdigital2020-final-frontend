import React, { useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '@test';

import { MODAL_TYPES } from '../../utils/constants';

import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import SimpleCell from '@vkontakte/vkui/dist/components/SimpleCell/SimpleCell';
import CardScroll from '@vkontakte/vkui/dist/components/CardScroll/CardScroll';
import Card from '@vkontakte/vkui/dist/components/Card/Card';

import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Headline from '@vkontakte/vkui/dist/components/Typography/Headline/Headline';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import Header from '@vkontakte/vkui/dist/components/Header/Header';

import {
  Icon28InfoOutline,
  Icon28ListOutline,
  Icon28Users3Outline,
} from '@vkontakte/icons';

type Props = {
  // data: User;
  updateActiveModal: (modal: any) => void; // TODO: FIX ANY
};

const achivementStyles = {
  height: 96,
  width: 104,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Profile: React.FC<Props> = ({
  // data,
  updateActiveModal,
}: Props) => {
  const profile = useSelector(
    (state: RootState) => state.profile.data,
  );

  const history = useHistory();

  const Achievement = () => (
    <div
      style={{ ...achivementStyles }}
      onClick={() =>
        updateActiveModal(MODAL_TYPES.ACHIEVEMENTS)
      }
    >
      <Avatar
        size={80}
        mode="image"
        src="https://cdn.dota2.com/apps/dota2/images/heroes/pudge_vert.jpg?v=5027641"
      />
    </div>
  );

  const name = useMemo(() => {
    const firstName = profile?.first_name || '';
    const lastName = profile?.last_name || '';
    return firstName && lastName
      ? `${firstName} ${lastName}`
      : 'Неопознанный Пользователь';
  }, [profile?.first_name, profile?.last_name]);

  const location = useMemo(() => {
    const city = (profile && profile?.city.title) || '';
    const country =
      (profile && profile?.country.title) || '';
    return city && country
      ? `${city}, ${country}`
      : 'Неизвестно';
  }, [profile?.city, profile?.country]);

  const redirectToTeam = useCallback(() => {
    return history.push(
      profile.team_id ? '/teams/my' : '/teams/',
    );
  }, [profile.team_id]);

  const before = useMemo(() => {
    return profile.team_id ? (
      <Avatar
        size={48}
        src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4f/Virtus.proLogo.png/1200px-Virtus.proLogo.png"
      />
    ) : (
      <Avatar size={48}>
        <Icon28Users3Outline />
      </Avatar>
    );
  }, []);

  return (
    <Div>
      <Group title="Info" separator="hide">
        <Cell
          size="l"
          before={
            <Avatar size={72} src={profile?.photo_100} />
          }
          description={
            <Headline weight="regular">{location}</Headline>
          }
        >
          <Title weight="bold" level="3">
            {name}
          </Title>
        </Cell>
      </Group>
      <Group title="Team" separator="hide">
        <SimpleCell
          disabled={!profile.team_id}
          onClick={redirectToTeam}
          description={!!profile.team_id && 'Мид'}
          before={before}
        >
          {!!profile.team_id
            ? 'Virtus.Pro'
            : 'Вы еще не состоите в команде'}
        </SimpleCell>
      </Group>
      <Group title="Stats" separator="hide">
        <Cell
          disabled={!profile.team_id}
          before={<Icon28InfoOutline />}
          asideContent={
            <Text weight="regular">
              {!!profile.team_id && '322 место'}
            </Text>
          }
          onClick={() =>
            updateActiveModal(MODAL_TYPES.STATISTICS)
          }
        >
          Статистика
        </Cell>
      </Group>
      <Group title="Last games" separator="hide">
        <Cell
          disabled={!profile.team_id}
          before={<Icon28ListOutline />}
          asideContent={
            <Text weight="regular">
              {!!profile.team_id && '22W/8L'}
            </Text>
          }
          onClick={() =>
            updateActiveModal(MODAL_TYPES.LAST_GAMES)
          }
        >
          Последние матчи
        </Cell>
      </Group>
      <Group
        title="Achievements"
        header={<Header>Достижения</Header>}
      >
        <CardScroll>
          <Card size="s">
            <Achievement />
          </Card>
          <Card size="s">
            <Achievement />
          </Card>
          <Card size="s">
            <Achievement />
          </Card>
          <Card size="s">
            <Achievement />
          </Card>
        </CardScroll>
      </Group>
    </Div>
  );
};

export default Profile;
