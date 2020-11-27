import React, { useState } from 'react';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

type MessagesProps = {
  id: string;
};

const Messages: React.FC<MessagesProps> = ({ id }: MessagesProps) => {
  const [fetching] = useState(false);

  return (
    <PanelWrapper id={id} fetching={fetching}>
      <Panel id={id}>
        <PanelHeader>Messages</PanelHeader>
        {/* <MessagesComponent data={user} /> */}
      </Panel>
    </PanelWrapper>
  );
};

export default Messages;
