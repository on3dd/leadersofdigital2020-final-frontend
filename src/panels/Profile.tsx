import React, { useState } from 'react';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

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
        <PanelHeader>Profile</PanelHeader>
        {/* <ProfileComponent data={user} /> */}
      </Panel>
    </PanelWrapper>
  );
};

export default Profile;
