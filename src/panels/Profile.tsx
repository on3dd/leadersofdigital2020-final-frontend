import React, {
  useState,
  useMemo,
  useCallback,
} from 'react';
import { Route } from 'react-router-dom';

import PanelWrapper from '../utils/wrappers/PanelWrapper';
import {
  MODAL_TYPES,
  MODAL_TITLES,
} from '../utils/constants';

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
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import { Icon24Done, Icon24Cancel } from '@vkontakte/icons';

// import PanelHeaderWithButton from '../components/BaseUI/PanelHeaderWithButton';
import ProfileComponent from '../components/profile';

type ProfileProps = {
  id: string;
};

type Modal = string | null;

const Profile: React.FC<ProfileProps> = ({
  id,
}: ProfileProps) => {
  const [fetching] = useState(false);
  const [activeModal, setActiveModal] = useState(
    null as Modal,
  );
  const [modalHistory, setModalHistory] = useState(
    [] as string[],
  );

  const updateActiveModal = useCallback(
    (activeModal: Modal = null) => {
      setActiveModal(() => activeModal);

      if (activeModal === null) {
        setModalHistory(() => []);
      } else if (modalHistory.indexOf(activeModal) !== -1) {
        setModalHistory((prev) =>
          prev.splice(0, prev.indexOf(activeModal) + 1),
        );
      } else {
        setModalHistory((prev) => [...prev, activeModal]);
      }
    },
    [modalHistory, setActiveModal, setModalHistory],
  );

  const modalClose = useCallback(() => {
    return updateActiveModal(
      modalHistory[modalHistory.length - 2],
    );
  }, [modalHistory, updateActiveModal]);

  const modalBack = useCallback(() => {
    return updateActiveModal(
      modalHistory[modalHistory.length - 2],
    );
  }, [modalHistory, updateActiveModal]);

  const header = useCallback(
    (title: string = '') => (
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
            {IS_PLATFORM_IOS ? 'Готово' : <Icon24Done />}
          </PanelHeaderButton>
        }
      >
        {title}
      </ModalPageHeader>
    ),
    [],
  );

  const modal = useMemo(
    () => (
      <ModalRoot
        activeModal={activeModal}
        onClose={modalClose}
      >
        <ModalPage
          id={MODAL_TYPES.STATISTICS}
          header={header(MODAL_TITLES.STATISTICS)}
        >
          <Div>...</Div>
        </ModalPage>
        <ModalPage
          id={MODAL_TYPES.LAST_GAMES}
          header={header(MODAL_TITLES.LAST_GAMES)}
        >
          <Div>...</Div>
        </ModalPage>

        <ModalPage
          id={MODAL_TYPES.ACHIEVEMENTS}
          header={header(MODAL_TITLES.ACHIEVEMENTS)}
        >
          <Div>...</Div>
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
            <PanelHeader>Профиль</PanelHeader>
            <ProfileComponent
              updateActiveModal={updateActiveModal}
            />
          </Panel>
        </PanelWrapper>
      )}
    />
  );
};

export default Profile;
