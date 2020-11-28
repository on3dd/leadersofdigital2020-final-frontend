import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

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
  const data = useSelector(
    (state: RootState) => state.profile.data,
  );

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
    const firstName = data?.first_name || '';
    const lastName = data?.last_name || '';
    return firstName && lastName
      ? `${firstName} ${lastName}`
      : 'Неопознанный Пользователь';
  }, [data?.first_name, data?.last_name]);

  const location = useMemo(() => {
    const city = (data && data?.city.title) || '';
    const country = (data && data?.country.title) || '';
    return city && country
      ? `${city}, ${country}`
      : 'Неизвестно';
  }, [data?.city, data?.country]);

  return (
    <Div>
      <Group title="Info" separator="hide">
        <Cell
          size="l"
          before={
            <Avatar size={72} src={data?.photo_100} />
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
          disabled={!data.team_id}
          description={!!data.team_id && 'Мид'}
          before={
            <Avatar
              size={48}
              src={
                !!data.team_id
                  ? 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4f/Virtus.proLogo.png/1200px-Virtus.proLogo.png'
                  : ''
              }
            />
          }
        >
          {!!data.team_id
            ? 'Virtus.Pro'
            : 'Вы не состоите в команде'}
        </SimpleCell>
      </Group>
      <Group title="Stats" separator="hide">
        <Cell
          disabled={!data.team_id}
          before={<Icon28InfoOutline />}
          asideContent={
            <Text weight="regular">
              {!!data.team_id && '322 место'}
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
          disabled={!data.team_id}
          before={<Icon28ListOutline />}
          asideContent={
            <Text weight="regular">
              {!!data.team_id && '22W/8L'}
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
