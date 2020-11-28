import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import PanelHeaderWithButton from '../components/BaseUI/PanelHeaderWithButton';
import PlayersComponent from '../components/players';
import PlayersItemComponent from '../components/players/id';

type PlayersProps = {
  id: string;
};

const Players: React.FC<PlayersProps> = ({
  id,
}: PlayersProps) => {
  const [fetching] = useState(false);

  return (
    <>
      <Route
        path="/players"
        exact
        component={() => (
          <PanelWrapper id={id} fetching={fetching}>
            <Panel id={id}>
              <PanelHeader>Игроки</PanelHeader>
              <PlayersComponent />
            </Panel>
          </PanelWrapper>
        )}
      />

      <Route
        path="/players/:id"
        exact
        component={() => (
          <PanelWrapper id={id} fetching={fetching}>
            <Panel id={id}>
              <PanelHeaderWithButton to="/players">
                Команда
              </PanelHeaderWithButton>
              <PlayersItemComponent />
            </Panel>
          </PanelWrapper>
        )}
      />
    </>
  );
};

export default Players;
