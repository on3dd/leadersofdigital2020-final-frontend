import React from 'react';

import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';

const NewsItem: React.FC = () => (
  <Group title="Navigation Example">
    <Div>
      <Title level="1" weight="bold">
        Child route
      </Title>
    </Div>
  </Group>
);

export default NewsItem;
