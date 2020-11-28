import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';

import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text';

import LinkButton from '../components/BaseUI/LinkButton';

type MatchesProps = {
  id: string;
};

const Matches: React.FC<MatchesProps> = ({
  id,
}: MatchesProps) => {
  const [fetching] = useState(false);

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
                    <LinkButton size="xl" to="/profile">
                      Приступить
                    </LinkButton>
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
