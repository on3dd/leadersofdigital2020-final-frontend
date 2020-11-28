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

import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Header from '@vkontakte/vkui/dist/components/Header/Header';

const Profile: React.FC = () => {
  const [search, setSearch] = useState('');

  const data = useSelector(
    (state: RootState) => state.teams.data,
  );

  const history = useHistory();

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e?.target?.value || '';
      return setSearch(() => value);
    },
    [],
  );

  const onClick = useCallback(
    (e: SyntheticEvent<HTMLElement>) => {
      console.log('redirecting...');
      return history.push('/teams/1');
    },
    [history],
  );

  const thematics = useMemo(() => {
    const str = search.toLowerCase();
    return data.filter(
      ({ title }) => title.toLowerCase().indexOf(str) > -1,
    );
  }, [search]);

  return (
    <Div>
      <Group
        title="Info"
        separator="show"
        header={<Header>Моя команда</Header>}
      >
        <RichCell
          text="1 место"
          caption="Владивосток, Россия"
          before={
            <Avatar
              size={72}
              src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4f/Virtus.proLogo.png/1200px-Virtus.proLogo.png"
            />
          }
          onClick={onClick}
        >
          <Title weight="bold" level="3">
            Virtus.Pro
          </Title>
        </RichCell>
      </Group>
      <Group title="Search">
        <Search
          value={search}
          onChange={onChange}
          after={null}
        />
        <Header>Другие команды</Header>
        {thematics.length > 0 && (
          <List>
            {thematics.map((item, idx) => (
              <RichCell
                key={item.id}
                disabled
                multiline
                caption="Хабаровск, Россия"
                text={`${idx + 2} место`}
                before={
                  <Avatar size={72} src={item.photo_100} />
                }
                actions={
                  <React.Fragment>
                    <Button size="m" onClick={onClick}>
                      Подробнее
                    </Button>
                    <Button size="m" mode="secondary">
                      Вызов
                    </Button>
                  </React.Fragment>
                }
              >
                {item.title}
              </RichCell>
            ))}
          </List>
        )}
      </Group>
    </Div>
  );
};

export default Profile;
