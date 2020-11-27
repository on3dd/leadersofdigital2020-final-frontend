import React, { useState } from 'react';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

type ClipsProps = {
  id: string;
};

const Clips: React.FC<ClipsProps> = ({ id }: ClipsProps) => {
  const [fetching] = useState(false);

  return (
    <PanelWrapper id={id} fetching={fetching}>
      <Panel id={id}>
        <PanelHeader>Clips</PanelHeader>
        {/* <ClipsComponent data={user} /> */}
      </Panel>
    </PanelWrapper>
  );
};

export default Clips;
