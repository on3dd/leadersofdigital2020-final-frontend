import React, {
  ChangeEvent,
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
import Search from '@vkontakte/vkui/dist/components/Search/Search';
import Button from '@vkontakte/vkui/dist/components/Button/Button';

import Header from '@vkontakte/vkui/dist/components/Header/Header';

const Profile: React.FC = () => {
  const [search, setSearch] = useState('');

  const data = useSelector(
    (state: RootState) => state.players.data,
  );

  const history = useHistory();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e?.target?.value || '';
      return setSearch(() => value);
    },
    [setSearch],
  );

  const onClick = useCallback(
    (
      e: SyntheticEvent<HTMLElement>,
      id: string | number = '',
    ) => {
      console.log('redirect id...', id);
      console.log('redirecting...');
      return history.push(`/players/${id}`);
    },
    [history],
  );

  const thematics = useMemo(() => {
    const str = search.toLowerCase();
    return data.filter(
      ({ first_name, last_name }) =>
        `${first_name} ${last_name}`
          .toLowerCase()
          .indexOf(str) > -1,
    );
  }, [search, data]);

  return (
    <Div>
      <Group title="Search">
        <Search
          value={search}
          onChange={onChange}
          after={null}
        />
        <Header>Другие игроки</Header>
        {thematics.length > 0 && (
          <List>
            {thematics.map((item, idx) => (
              <RichCell
                key={item.id}
                disabled
                multiline
                caption="Хабаровск, Россия"
                text="Immortal, 1000"
                before={
                  <Avatar
                    size={72}
                    src="https://pbs.twimg.com/profile_images/1280494492974493698/KqYCFM3j.jpg"
                  />
                }
                actions={
                  <React.Fragment>
                    <Button
                      size="m"
                      onClick={(evt) =>
                        onClick(evt, item.id)
                      }
                    >
                      Подробнее
                    </Button>
                    <Button size="m" mode="secondary">
                      Скрыть
                    </Button>
                  </React.Fragment>
                }
              >
                {
                  (item as any).name // TODO: FiX ANY AND NAME
                }
              </RichCell>
            ))}
          </List>
        )}
      </Group>
    </Div>
  );
};

export default Profile;
