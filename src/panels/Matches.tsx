import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import MatchesComponent from '../components/matches';

type MatchesProps = {
  id: string;
};

const Matches: React.FC<MatchesProps> = ({
  id,
}: MatchesProps) => {
  const [fetching] = useState(false);

  return (
    <Route
      path="/matches"
      exact
      component={() => (
        <PanelWrapper id={id} fetching={fetching}>
          <Panel id={id}>
            <PanelHeader>Матчи</PanelHeader>
            <MatchesComponent />
          </Panel>
        </PanelWrapper>
      )}
    />
  );
};

export default Matches;
