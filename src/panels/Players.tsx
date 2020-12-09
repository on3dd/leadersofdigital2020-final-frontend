import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Route } from 'react-router-dom';

import { ChildProps, Modal } from '@test';

import fetchPlayers from '../actions/fetchPlayers';
import fetchPlayer from '../actions/fetchPlayer';

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
import ModalCard from '@vkontakte/vkui/dist/components/ModalCard/ModalCard';
import ModalPageHeader from '@vkontakte/vkui/dist/components/ModalPageHeader/ModalPageHeader';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import { Icon24Done, Icon24Cancel } from '@vkontakte/icons';

import PanelHeaderWithButton from '../components/BaseUI/PanelHeaderWithButton';
import PlayersComponent from '../components/players';
import PlayersItemComponent from '../components/players/id';

type PlayersProps = {
  id: string;
};

const Players: React.FC<PlayersProps> = ({
  id,
}: PlayersProps) => {
  return (
    <>
      <Route
        path="/players"
        exact
        component={() => <PlayersIndex id={id} />}
      />

      <Route
        path="/players/:id"
        exact
        component={() => <PlayersItem id={id} />}
      />
    </>
  );
};

const PlayersIndex = ({ id }: ChildProps) => {
  const [fetching, setFetching] = useState(true);
  const [activeModal, setActiveModal] = useState(
    null as Modal,
  );
  const [modalHistory, setModalHistory] = useState(
    [] as string[],
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      console.log('user fetching...');

      await dispatch(fetchPlayers());

      console.log('user fetched');

      setFetching(false);
    };

    fetchData();
  }, []);

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
    [modalHistory],
  );

  const modalClose = useCallback(() => {
    return updateActiveModal(
      modalHistory[modalHistory.length - 2],
    );
  }, [modalHistory]);

  const modalBack = useCallback(() => {
    return updateActiveModal(
      modalHistory[modalHistory.length - 2],
    );
  }, [modalHistory]);

  const header = useCallback(
    (title: string = '', card?: boolean) => (
      <ModalPageHeader
        left={
          !card &&
          IS_PLATFORM_ANDROID && (
            <PanelHeaderButton onClick={modalBack}>
              <Icon24Cancel />
            </PanelHeaderButton>
          )
        }
        right={
          !card && (
            <PanelHeaderButton onClick={modalBack}>
              {IS_PLATFORM_IOS ? 'Готово' : <Icon24Done />}
            </PanelHeaderButton>
          )
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

        <ModalCard
          id={MODAL_TYPES.ACHIEVEMENTS}
          header={header(MODAL_TITLES.ACHIEVEMENTS, true)}
          caption="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
          icon={
            <Avatar
              size={72}
              src="https://cdn.dota2.com/apps/dota2/images/heroes/pudge_vert.jpg?v=5027641"
            />
          }
          onClose={modalClose}
          actions={[
            {
              title: 'Поделиться',
              mode: 'primary',
              action: modalClose,
            },
          ]}
        />
      </ModalRoot>
    ),
    [activeModal, modalClose, modalBack],
  );

  return (
    <PanelWrapper id={id} fetching={fetching}>
      <Panel id={id}>
        <PanelHeader>Игроки</PanelHeader>
        <PlayersComponent />
      </Panel>
    </PanelWrapper>
  );
};

const PlayersItem = ({ id }: ChildProps) => {
  const [fetching, setFetching] = useState(true);
  const [activeModal, setActiveModal] = useState(
    null as Modal,
  );
  const [modalHistory, setModalHistory] = useState(
    [] as string[],
  );

  const dispatch = useDispatch();
  const params: { id: string } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      console.log('player params.id', params.id);
      console.log('player fetching...');

      await dispatch(fetchPlayer(params.id));

      console.log('player fetched');

      setFetching(false);
    };

    fetchData();
  }, []);

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
    [modalHistory],
  );

  const modalClose = useCallback(() => {
    return updateActiveModal(
      modalHistory[modalHistory.length - 2],
    );
  }, [modalHistory]);

  const modalBack = useCallback(() => {
    return updateActiveModal(
      modalHistory[modalHistory.length - 2],
    );
  }, [modalHistory]);

  const header = useCallback(
    (title: string = '', card?: boolean) => (
      <ModalPageHeader
        left={
          !card &&
          IS_PLATFORM_ANDROID && (
            <PanelHeaderButton onClick={modalBack}>
              <Icon24Cancel />
            </PanelHeaderButton>
          )
        }
        right={
          !card && (
            <PanelHeaderButton onClick={modalBack}>
              {IS_PLATFORM_IOS ? 'Готово' : <Icon24Done />}
            </PanelHeaderButton>
          )
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

        <ModalCard
          id={MODAL_TYPES.ACHIEVEMENTS}
          header={header(MODAL_TITLES.ACHIEVEMENTS, true)}
          caption="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
          icon={
            <Avatar
              size={72}
              src="https://cdn.dota2.com/apps/dota2/images/heroes/pudge_vert.jpg?v=5027641"
            />
          }
          onClose={modalClose}
          actions={[
            {
              title: 'Поделиться',
              mode: 'primary',
              action: modalClose,
            },
          ]}
        />
      </ModalRoot>
    ),
    [activeModal, modalClose, modalBack],
  );

  return (
    <PanelWrapper id={id} fetching={fetching} modal={modal}>
      <Panel id={id}>
        <PanelHeaderWithButton to="/players">
          Игрок
        </PanelHeaderWithButton>
        <PlayersItemComponent
          updateActiveModal={updateActiveModal}
        />
      </Panel>
    </PanelWrapper>
  );
};

export default Players;
