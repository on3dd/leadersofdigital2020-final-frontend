import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

type TeamsProps = {
  id: string;
};

const Teams: React.FC<TeamsProps> = ({
  id,
}: TeamsProps) => {
  const [fetching] = useState(false);

  return (
    <Route
      path="/teams"
      exact
      component={() => (
        <PanelWrapper id={id} fetching={fetching}>
          <Panel id={id}>
            <PanelHeader>Teams</PanelHeader>
            {/* <TeamsComponent data={user} /> */}
          </Panel>
        </PanelWrapper>
      )}
    />
  );
};

export default Teams;
