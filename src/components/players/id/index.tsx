import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@test';

import { MODAL_TYPES } from '../../../utils/constants';

import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import SimpleCell from '@vkontakte/vkui/dist/components/SimpleCell/SimpleCell';
import CardScroll from '@vkontakte/vkui/dist/components/CardScroll/CardScroll';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Button from '@vkontakte/vkui/dist/components/Button/Button';

import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Headline from '@vkontakte/vkui/dist/components/Typography/Headline/Headline';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import Header from '@vkontakte/vkui/dist/components/Header/Header';

import {
  Icon28InfoOutline,
  Icon28ListOutline,
} from '@vkontakte/icons';

type Props = {
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
  updateActiveModal,
}: Props) => {
  const player = useSelector(
    (state: RootState) => state.player.data,
  );

  console.log('team item', player);

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

  return (
    <Div>
      <Group title="Info" separator="hide">
        <Cell
          size="l"
          before={
            <Avatar size={72} src={player.photo_100} />
          }
          description={
            <Headline weight="regular">
              Владивосток, Россия
            </Headline>
          }
        >
          <Title weight="bold" level="3">
            {/* {`${player.first_name} ${player.last_name}`} */}
            {
              // TODO: FIX ANY AND TITLE
              (player as any).title
            }
          </Title>
        </Cell>
      </Group>
      <Group title="Actions" separator="hide">
        <Div style={{ display: 'flex', marginTop: 0 }}>
          <Button
            size="l"
            stretched
            style={{ marginRight: 8 }}
          >
            Написать
          </Button>
          <Button size="l" stretched mode="secondary">
            Пригласить в команду
          </Button>
        </Div>
      </Group>
      <Group title="Team" separator="hide">
        <SimpleCell
          description="Мид"
          before={
            <Avatar
              size={48}
              src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4f/Virtus.proLogo.png/1200px-Virtus.proLogo.png"
            />
          }
        >
          Virtus.Pro
        </SimpleCell>
      </Group>
      <Group title="Stats" separator="hide">
        <Cell
          before={<Icon28InfoOutline />}
          asideContent={
            <Text weight="regular">322 место</Text>
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
          before={<Icon28ListOutline />}
          asideContent={
            <Text weight="regular">22W/8L</Text>
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
