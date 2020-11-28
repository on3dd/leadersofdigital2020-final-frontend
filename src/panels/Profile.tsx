import React, {
  useState,
  useMemo,
  useCallback,
} from 'react';
import { Route } from 'react-router-dom';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import {
  IS_PLATFORM_ANDROID,
  IS_PLATFORM_IOS,
} from '@vkontakte/vkui';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import ModalRoot from '@vkontakte/vkui/dist/components/ModalRoot/ModalRoot';
import ModalPage from '@vkontakte/vkui/dist/components/ModalPage/ModalPage';
import ModalPageHeader from '@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader';

import { Icon24Done, Icon24Cancel } from '@vkontakte/icons';

// import PanelHeaderWithButton from '../components/BaseUI/PanelHeaderWithButton';
import ProfileComponent from '../components/profile';

type ProfileProps = {
  id: string;
};

const Profile: React.FC<ProfileProps> = ({
  id,
}: ProfileProps) => {
  const [fetching] = useState(false);
  const [activeModal] = useState(null);

  const modalClose = useCallback(() => {
    return console.log('closing modal:', activeModal);
  }, [activeModal]);

  const modalBack = useCallback(() => {
    return console.log('back from:', activeModal);
  }, [activeModal]);

  const modal = useMemo(
    () => (
      <ModalRoot
        activeModal={activeModal}
        onClose={modalClose}
      >
        <ModalPage
          id="statistics"
          header={
            <ModalPageHeader
              left={
                IS_PLATFORM_ANDROID && (
                  <PanelHeaderButton onClick={modalBack}>
                    <Icon24Cancel />
                  </PanelHeaderButton>
                )
              }
              right={
                <PanelHeaderButton onClick={modalBack}>
                  {IS_PLATFORM_IOS ? (
                    'Готово'
                  ) : (
                    <Icon24Done />
                  )}
                </PanelHeaderButton>
              }
            >
              Фильтры
            </ModalPageHeader>
          }
        >
          ...
        </ModalPage>
        <ModalPage id="last_games" header="Последние матчи">
          ...
        </ModalPage>
      </ModalRoot>
    ),
    [activeModal, modalClose, modalBack],
  );

  return (
    <Route
      path="/profile"
      component={() => (
        <PanelWrapper
          id={id}
          fetching={fetching}
          modal={modal}
        >
          <Panel id={id}>
            {/* <PanelHeaderWithButton to="/profile">
              Profile Item
            </PanelHeaderWithButton> */}
            <PanelHeader>Профиль</PanelHeader>
            <ProfileComponent />
          </Panel>
        </PanelWrapper>
      )}
    />
  );
};

export default Profile;
