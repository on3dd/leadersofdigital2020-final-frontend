import React, {
  SyntheticEvent,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from '@test';

import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import List from '@vkontakte/vkui/dist/components/List/List';
import RichCell from '@vkontakte/vkui/dist/components/RichCell/RichCell';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';

import Headline from '@vkontakte/vkui/dist/components/Typography/Headline/Headline';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import { MODAL_TYPES } from 'utils/constants';

type Props = {
  updateActiveModal: (modal: any) => void; // TODO: FIX ANY
};

const Profile: React.FC<Props> = ({
  updateActiveModal,
}: Props) => {
  const matches = useSelector(
    (state: RootState) => state.matches.data,
  );

  const onClick = useCallback(
    (e: SyntheticEvent<HTMLElement>) => {
      updateActiveModal(MODAL_TYPES.INSPECT_MATCH);
    },
    [updateActiveModal],
  );

  return (
    <Div>
      <Group title="Create" separator="hide">
        <FixedLayout vertical="bottom">
          <Div>
            <Button
              stretched
              size="xl"
              style={{ marginTop: 0 }}
              onClick={() =>
                updateActiveModal(MODAL_TYPES.CREATE_MATCH)
              }
            >
              Создать матч
            </Button>
          </Div>
        </FixedLayout>
      </Group>
      <Group
        title="Search"
        header={<Header>Текущие матчи</Header>}
      >
        <List style={{ marginBottom: '50px' }}>
          {matches.map((item) => {
            return (
              <RichCell key={item.id} onClick={onClick}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <Avatar src={item.team_left_image} />
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
                        {`${item.team_left} | ${item.team_right}`.toUpperCase()}
                      </Headline>
                    </div>

                    <div className="top-row">
                      <Text
                        weight={
                          item.live ? 'semibold' : 'regular'
                        }
                        style={{
                          color: item.live
                            ? 'red'
                            : 'rgb(129, 140, 153)',
                          fontSize: '0.9rem',
                        }}
                      >
                        {item.live ? 'LIVE' : item.date}
                      </Text>
                    </div>
                  </div>
                  <div>
                    <Avatar src={item.team_right_image} />
                  </div>
                </div>
              </RichCell>
            );
          })}
        </List>
      </Group>
    </Div>
  );
};

export default Profile;
