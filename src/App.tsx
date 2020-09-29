import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
} from 'react-router-dom';

import styled from 'styled-components';
import bridge from '@vkontakte/vk-bridge';

import '@vkontakte/vkui/dist/vkui.css';

import StoreProvider from './utils/StoreProvider';

import Index from './panels';

const Main = styled.main``;

const App: React.FC = () => {
  useEffect(() => {
    // TODO: fix any
    bridge.subscribe(({ detail: { type, data } }: any) => {
      if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute(
          'scheme',
        );

        schemeAttribute.value = data.scheme
          ? data.scheme
          : 'client_light';

        document.body.attributes.setNamedItem(
          schemeAttribute,
        );
      }
    });
  }, []);

  return (
    <StoreProvider>
      <BrowserRouter basename="/">
        <Main>
          <Index />
        </Main>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
