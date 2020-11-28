import React, {
  useState,
  useMemo,
  useCallback,
} from 'react';
import { Route } from 'react-router-dom';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import PanelHeaderWithButton from '../components/BaseUI/PanelHeaderWithButton';
import MatchesComponent from '../components/matches';
import MatchesItemComponent from '../components/matches/id';

type MatchesProps = {
  id: string;
};

const Matches: React.FC<MatchesProps> = ({
  id,
}: MatchesProps) => {
  const [fetching] = useState(false);

  return (
    <>
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

      <Route
        path="/matches/:id"
        exact
        component={() => (
          <PanelWrapper id={id} fetching={fetching}>
            <Panel id={id}>
              <PanelHeaderWithButton to="/matches">
                Матч
              </PanelHeaderWithButton>
              <MatchesItemComponent />
            </Panel>
          </PanelWrapper>
        )}
      />
    </>
  );
};

export default Matches;
