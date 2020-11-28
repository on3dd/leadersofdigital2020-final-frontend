import React, {
  ChangeEvent,
  useState,
  useMemo,
  useCallback,
} from 'react';

import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import List from '@vkontakte/vkui/dist/components/List/List';
import RichCell from '@vkontakte/vkui/dist/components/RichCell/RichCell';
import Search from '@vkontakte/vkui/dist/components/Search/Search';

import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e?.target?.value || '';
    return setSearch(() => value);
  };

  const thematics = useMemo(() => {
    const str = search.toLowerCase();
    return data.filter(
      ({ name }) => name.toLowerCase().indexOf(str) > -1,
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
          // size="l"
          before={
            <Avatar
              size={72}
              src="https://upload.wikimedia.org/wikipedia/ru/thumb/4/4f/Virtus.proLogo.png/1200px-Virtus.proLogo.png"
            />
          }
          // description={
          //   <Headline weight="regular">
          //     Владивосток, Россия
          //   </Headline>
          // }
          text="1 место"
          caption="Владивосток, Россия"
          // bottomContent={
          //   <div style={{ display: 'flex' }}>
          //     <LinkButton
          //       to="/teams/1"
          //       size="m"
          //       mode="primary"
          //     >
          //       Подробнее
          //     </LinkButton>
          //   </div>
          // }
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
                before={
                  <Avatar
                    size={48}
                    src="https://upload.wikimedia.org/wikipedia/ru/2/2c/NAVI_logo.png"
                  />
                }
                caption="Хабаровск, Россия"
                text={`${idx + 2} место`}
                // after="+ 1 500 ₽"
              >
                {item.name}
              </RichCell>
            ))}
          </List>
        )}
      </Group>
    </Div>
  );
};

export default Profile;
