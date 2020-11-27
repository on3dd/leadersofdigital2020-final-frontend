import React from 'react';

import Group from '@vkontakte/vkui/dist/components/Group/Group';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';

import LinkButton from '../BaseUI/LinkButton';

const News: React.FC = () => (
  <>
    <Group title="Navigation Example">
      <Div>
        <Title level="1" weight="bold">
          Parent route
        </Title>
      </Div>
    </Group>
    <Group title="Navigation Example">
      <FixedLayout vertical="bottom">
        <Div>
          <LinkButton to="/news/id">
            Go to child route
          </LinkButton>
        </Div>
      </FixedLayout>
    </Group>
  </>
);

export default News;
