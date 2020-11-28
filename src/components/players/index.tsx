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

const data = [
  { id: 3201, name: 'Аренда автомобилей' },
  { id: 3273, name: 'Автотовары' },
  { id: 3205, name: 'Автосалон' },
  { id: 3282, name: 'Автосервис' },
  { id: 3283, name: 'Услуги для автовладельцев' },
  { id: 3284, name: 'Велосипеды' },
  { id: 3285, name: 'Мотоциклы и другая мототехника' },
  { id: 3286, name: 'Водный транспорт' },
  { id: 3287, name: 'Автопроизводитель' },
  { id: 3288, name: 'Автомойка' },
  { id: 3117, name: 'Автошкола' },
  { id: 3118, name: 'Детский сад' },
  { id: 3119, name: 'Гимназия' },
  { id: 3120, name: 'Колледж' },
  { id: 3121, name: 'Лицей' },
  { id: 3122, name: 'Техникум' },
  { id: 3123, name: 'Университет' },
  { id: 3124, name: 'Школа' },
  { id: 3125, name: 'Институт' },
  { id: 3126, name: 'Обучающие курсы' },
  { id: 3276, name: 'Дополнительное образование' },
  { id: 3275, name: 'Тренинг, семинар' },
  { id: 3127, name: 'Танцевальная школа' },
];

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
    (e: SyntheticEvent<HTMLElement>) => {
      console.log('redirecting...');
      return history.push('/players/1');
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
  }, [search]);

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
                    <Button size="m" onClick={onClick}>
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
