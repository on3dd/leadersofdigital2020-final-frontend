import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

type PlayersProps = {
  id: string;
};

const Players: React.FC<PlayersProps> = ({
  id,
}: PlayersProps) => {
  const [fetching] = useState(false);

  return (
    <Route
      path="/players"
      exact
      component={() => (
        <PanelWrapper id={id} fetching={fetching}>
          <Panel id={id}>
            <PanelHeader>Players</PanelHeader>
            {/* <PlayersComponent data={user} /> */}
          </Panel>
        </PanelWrapper>
      )}
    />
  );
};

export default Players;
