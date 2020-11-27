import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import PanelHeaderWithButton from '../components/BaseUI/PanelHeaderWithButton';
import ProfileComponent from '../components/profile';
import ProfileItemComponent from '../components/profile/id';

type ProfileProps = {
  id: string;
};

const Profile: React.FC<ProfileProps> = ({
  id,
}: ProfileProps) => {
  const [fetching] = useState(false);

  return (
    <PanelWrapper id={id} fetching={fetching}>
      <Panel id={id}>
        <Route
          path="/profile"
          exact
          component={() => (
            <>
              <PanelHeader>Profile</PanelHeader>
              <ProfileComponent />
            </>
          )}
        />
        <Route
          path="/profile/:id"
          component={() => (
            <>
              <PanelHeaderWithButton to="/profile">
                Profile Item
              </PanelHeaderWithButton>
              <ProfileItemComponent />
            </>
          )}
        />
      </Panel>
    </PanelWrapper>
  );
};

export default Profile;
