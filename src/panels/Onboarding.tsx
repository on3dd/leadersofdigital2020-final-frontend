import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Route } from 'react-router-dom';

import bridge from '@vkontakte/vk-bridge';

import { User } from '@test';

import register from '../actions/register';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Button from '@vkontakte/vkui/dist/components/Button/Button';

import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';

type MatchesProps = {
  id: string;
};

const Matches: React.FC<MatchesProps> = ({
  id,
}: MatchesProps) => {
  const [fetching] = useState(false);
  const [user, setUser] = useState(null as User);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await bridge.send('VKWebAppGetUserInfo');

      setUser(() => user);
    };

    fetchUser();
  }, []);

  const onClick = useCallback(() => {
    // dispatch(register(user));
    return history.push('/profile');
  }, [history]);

  return (
    <Route
      path="/"
      exact
      component={() => (
        <PanelWrapper id={id} fetching={fetching}>
          <Panel id={id}>
            <PanelHeader>Введение</PanelHeader>
            <Div>
              <Group title="Heading" separator="hide">
                <Title
                  level="1"
                  weight="bold"
                  style={{ marginBottom: '1rem' }}
                >
                  Привет!
                </Title>
                <Text
                  weight="regular"
                  style={{ marginBottom: '1rem' }}
                >
                  Данное приложение поможет тебе найти
                  команду для командной игры в одной из
                  поддерживаемых дисциплин.
                </Text>
                <Text
                  weight="regular"
                  style={{ marginBottom: '1rem' }}
                >
                  Обрати внимание, что на данный момент
                  поддерживается только Dota 2.
                </Text>
              </Group>
              <Group>
                <FixedLayout vertical="bottom">
                  <Div>
                    <Button
                      size="xl"
                      onClick={onClick}
                      disabled={user === null}
                    >
                      Приступить
                    </Button>
                  </Div>
                </FixedLayout>
              </Group>
            </Div>
          </Panel>
        </PanelWrapper>
      )}
    />
  );
};

export default Matches;
