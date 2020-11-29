import React, {
  useState,
  useMemo,
  useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState } from '@test';

import { MODAL_TYPES } from '../../../utils/constants';

import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import RichCell from '@vkontakte/vkui/dist/components/RichCell/RichCell';
import HorizontalScroll from '@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import Header from '@vkontakte/vkui/dist/components/Header/Header';

import {
  Icon24User,
  Icon28CalendarOutline,
  Icon28InfoOutline,
  Icon28ListOutline,
} from '@vkontakte/icons';

type Props = {
  updateActiveModal: (modal: any) => void; // TODO: FIX ANY
};

const itemStyle = {
  flexShrink: 0,
  width: 80,
  // height: 94,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 12,
} as any;

const textStyle = {
  fontSize: '0.8rem',
  color: 'rgb(129, 140, 153)',
} as any;

const NewsItem: React.FC<Props> = ({
  updateActiveModal,
}: Props) => {
  const team = useSelector(
    (state: RootState) => state.team.data,
  );

  console.log('====================================');
  console.log('team item', team);
  console.log('====================================');

  const params: { id: string } = useParams();

  const header = useMemo(() => {
    return (
      <Header>
        {params.id === 'my' ? 'Моя команда' : 'Команда'}
      </Header>
    );
  }, [params.id]);

  return (
    <Div>
      <Group title="Info" separator="show" header={header}>
        <RichCell
          text="1 место"
          caption="Владивосток, Россия"
          before={<Avatar size={72} src={team.photo_100} />}
        >
          <Title weight="bold" level="3">
            {team.title}
          </Title>
        </RichCell>
      </Group>
      <Group
        style={{ paddingBottom: 8 }}
        header={<Header mode="secondary">Состав</Header>}
      >
        <HorizontalScroll>
          <div style={{ display: 'flex' }}>
            <div style={{ ...itemStyle, padding: '0 4px' }}>
              <Avatar size={64} style={{ marginBottom: 8 }}>
                <Icon24User />
              </Avatar>
              <Text weight="semibold">Элджей</Text>
              <Text
                weight="regular"
                style={{ ...textStyle }}
              >
                Мид
              </Text>
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}>
                <Icon24User />
              </Avatar>
              <Text weight="semibold">Элджей</Text>
              <Text
                weight="regular"
                style={{ ...textStyle }}
              >
                Мид
              </Text>
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}>
                <Icon24User />
              </Avatar>
              <Text weight="semibold">Элджей</Text>
              <Text
                weight="regular"
                style={{ ...textStyle }}
              >
                Мид
              </Text>
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}>
                <Icon24User />
              </Avatar>
              <Text weight="semibold">Элджей</Text>
              <Text
                weight="regular"
                style={{ ...textStyle }}
              >
                Мид
              </Text>
            </div>
            <div style={itemStyle}>
              <Avatar size={64} style={{ marginBottom: 8 }}>
                <Icon24User />
              </Avatar>
              <Text weight="semibold">Элджей</Text>
              <Text
                weight="regular"
                style={{ ...textStyle }}
              >
                Мид
              </Text>
            </div>
          </div>
        </HorizontalScroll>
      </Group>
      <Group title="Stats" separator="hide">
        <Cell
          before={<Icon28CalendarOutline />}
          onClick={() =>
            updateActiveModal(MODAL_TYPES.MATCH_SCHEDULE)
          }
        >
          Расписание матчей
        </Cell>
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
    </Div>
  );
};

export default NewsItem;
