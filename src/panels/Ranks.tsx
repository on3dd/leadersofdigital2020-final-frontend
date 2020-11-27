import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

type RanksProps = {
  id: string;
};

const Ranks: React.FC<RanksProps> = ({
  id,
}: RanksProps) => {
  const [fetching] = useState(false);

  return (
    <Route
      path="/ranks"
      exact
      component={() => (
        <PanelWrapper id={id} fetching={fetching}>
          <Panel id={id}>
            <PanelHeader>Ranks</PanelHeader>
            {/* <RanksComponent data={user} /> */}
          </Panel>
        </PanelWrapper>
      )}
    />
  );
};

export default Ranks;
