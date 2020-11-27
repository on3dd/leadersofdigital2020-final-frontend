import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import PanelHeaderWithButton from '../components/BaseUI/PanelHeaderWithButton';
import NewsComponent from '../components/news';
import NewsItemComponent from '../components/news/id';

type NewsProps = {
  id: string;
};

const News: React.FC<NewsProps> = ({ id }: NewsProps) => {
  const [fetching] = useState(false);

  return (
    <PanelWrapper id={id} fetching={fetching}>
      <Panel id={id}>
        <Route
          path="/news"
          exact
          component={() => (
            <>
              <PanelHeader>News</PanelHeader>
              <NewsComponent />
            </>
          )}
        />
        <Route
          path="/news/:id"
          component={() => (
            <>
              <PanelHeaderWithButton to="/news">
                News Item
              </PanelHeaderWithButton>
              <NewsItemComponent />
            </>
          )}
        />
      </Panel>
    </PanelWrapper>
  );
};

export default News;
