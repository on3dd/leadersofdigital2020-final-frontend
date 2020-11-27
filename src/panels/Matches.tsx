import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

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
            <PanelHeader>Matches</PanelHeader>
            {/* <MatchesComponent data={user} /> */}
          </Panel>
        </PanelWrapper>
      )}
    />
  );
};

export default Matches;
