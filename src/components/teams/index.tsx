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

import LinkButton from '../BaseUI/LinkButton';

const Profile: React.FC = () => {
  const [search, setSearch] = useState('');

  const teams = useSelector(
    (state: RootState) => state.teams.data,
  );

  console.log('teams', teams);

  const profile = useSelector(
    (state: RootState) => state.profile.data,
  );

  console.log('profile', profile);

  const history = useHistory();

  const myTeam = useMemo(() => {
    console.log('profile.team_id', profile.team_id);

    const team = teams.find(
      (el) => el.id === profile.team_id,
    );

    console.log('my team', team);

    return team;
  }, [teams, profile.team_id]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e?.target?.value || '';
      return setSearch(() => value);
    },
    [],
  );

  const onClick = useCallback(
    (
      e: SyntheticEvent<HTMLElement>,
      id: string | number = '',
    ) => {
      console.log('redirect id...', id);
      console.log('redirecting...');
      return history.push(`/teams/${id}`);
    },
    [history],
  );

  const thematics = useMemo(() => {
    const str = search.toLowerCase();

    const filtred = teams.filter(
      ({ title }) => title.toLowerCase().indexOf(str) > -1,
    );

    console.log('teams filtred', filtred);

    return filtred;
  }, [search, teams]);

  return (
    <Div>
      <Group
        title="Info"
        separator="show"
        header={<Header>Моя команда</Header>}
      >
        {myTeam && myTeam.id ? (
          <RichCell
            text="1 место"
            caption="Владивосток, Россия"
            before={
              // <Avatar size={72} src={myTeam.photo_100} />
              <Avatar
                size={72}
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4f/Virtus.proLogo.png/1200px-Virtus.proLogo.png"
              />
            }
            onClick={(evt) => onClick(evt, 'my')}
          >
            <Title weight="bold" level="3">
              {myTeam.title}
            </Title>
          </RichCell>
        ) : (
          <Div>
            <LinkButton size="xl" to="/teams/create">
              Создать команду
            </LinkButton>
          </Div>
        )}
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
            {thematics.slice(1).map((item, idx) => (
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
                    <Button
                      size="m"
                      onClick={(evt) =>
                        onClick(evt, item.id)
                      }
                    >
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
