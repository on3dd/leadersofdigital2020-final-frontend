import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import { Modal } from '@test';

import fetchMatches from '../actions/fetchMatches';

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
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import FormLayoutGroup from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Header from '@vkontakte/vkui/dist/components/Header/Header';

import { Icon24Done, Icon24Cancel } from '@vkontakte/icons';

import PanelHeaderWithButton from '../components/BaseUI/PanelHeaderWithButton';
import MatchesComponent from '../components/matches';
import MatchesItemComponent from '../components/matches/id';

type MatchesProps = {
  id: string;
};

const Matches: React.FC<MatchesProps> = ({
  id,
}: MatchesProps) => {
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
      console.log('matches fetching...');

      await dispatch(fetchMatches());

      console.log('matches fetched');

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
          id={MODAL_TYPES.CREATE_MATCH}
          header={header(MODAL_TITLES.CREATE_MATCH)}
        >
          <FormLayout>
            <FormLayoutGroup top="Дата">
              <Input
                type="date"
                placeholder="Выберите дату"
              />
            </FormLayoutGroup>
            <FormLayoutGroup top="Время">
              <Input
                type="time"
                placeholder="Выберите время"
              />
            </FormLayoutGroup>

            <Button
              size="xl"
              onClick={() => updateActiveModal(null)}
            >
              Предложить
            </Button>
          </FormLayout>
        </ModalPage>

        <ModalPage
          id={MODAL_TYPES.INSPECT_MATCH}
          header={header(MODAL_TITLES.INSPECT_MATCH)}
        >
          <Group
            header={<Header>Ongoing match</Header>}
          ></Group>
        </ModalPage>
      </ModalRoot>
    ),
    [activeModal, modalClose, modalBack],
  );

  return (
    <Route
      path="/matches"
      exact
      component={() => (
        <PanelWrapper
          id={id}
          fetching={fetching}
          modal={modal}
        >
          <Panel id={id}>
            <PanelHeader>Матчи</PanelHeader>
            <MatchesComponent
              updateActiveModal={updateActiveModal}
            />
          </Panel>
        </PanelWrapper>
      )}
    />
  );
};

export default Matches;
