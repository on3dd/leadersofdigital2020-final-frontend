import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { Modal, RootState, Team } from '@test';

import fetchMatches from '../actions/fetchMatches';
import createMatch from '../actions/createMatch';
import fetchTeams from '../actions/fetchTeams';

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
import SelectMimicry from '@vkontakte/vkui/dist/components/SelectMimicry/SelectMimicry';
import Radio from '@vkontakte/vkui/dist/components/Radio/Radio';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import FormLayoutGroup from '@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Header from '@vkontakte/vkui/dist/components/Header/Header';

import { Icon24Done, Icon24Cancel } from '@vkontakte/icons';

import PanelHeaderWithButton from '../components/BaseUI/PanelHeaderWithButton';
import MatchesComponent from '../components/matches';
import MatchesItemComponent from '../components/matches/id';

type MatchesProps = {
  id: string;
};

const TEAMS = {
  NAVI: 'Natus Vincere',
  ALLIANCE: 'Alliance',
  NIGMA: 'Nigma',
};

type SelectedTeam = Team | null;
type SelectedDate = string;
type SelectedTime = string;

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

  const [selectedTeam, setSelectedTeam] = useState(
    null as SelectedTeam,
  );

  const [selectedDate, setSelectedDate] = useState(
    '30.11.2020' as SelectedDate,
  );

  const [selectedTime, setSelectedTime] = useState(
    '15:00' as SelectedTime,
  );

  const dispatch = useDispatch();
  const teams = useSelector((state: RootState) =>
    state.teams.data.slice(1),
  );

  useEffect(() => {
    const fetchData = async () => {
      console.log('matches fetching...');

      await dispatch(fetchMatches());
      await dispatch(fetchTeams());

      console.log('matches fetched');

      setFetching(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setSelectedTeam(() => teams[0]);
  }, [teams[0]]);

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

  const submit = useCallback(() => {
    console.log('====================================');
    console.log('submit data', {
      team_left_id: 1,
      team_right_id:
        (selectedTeam && selectedTeam?.id) || 0,
      date: selectedDate,
      time: selectedTime,
    });
    console.log('====================================');

    updateActiveModal(null);

    return dispatch(
      createMatch({
        team_left_id: 1,
        team_right_id:
          (selectedTeam && selectedTeam?.id) || 0,
        date: selectedDate,
        time: selectedTime,
      }),
    );
  }, []);

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
              <SelectMimicry
                top="Выберите команду"
                placeholder="Выберите команду"
                onClick={() =>
                  updateActiveModal(MODAL_TYPES.SELECT_TEAM)
                }
              >
                {selectedTeam ? selectedTeam?.title : ''}
              </SelectMimicry>
            </FormLayoutGroup>

            <FormLayoutGroup top="Дата">
              <Input
                type="string"
                placeholder="Выберите дату"
                value={selectedDate}
                readOnly={true}
                // onChange={(evt) => {
                //   evt.persist();

                //   console.log(
                //     'evt.target.value',
                //     evt.target.value,
                //   );

                //   setSelectedDate(() => evt.target.value);
                // }}
              />
            </FormLayoutGroup>
            <FormLayoutGroup top="Время">
              <Input
                type="time"
                placeholder="Выберите время"
                value={selectedTime}
                readOnly={true}
                // onChange={(evt) => {
                //   evt.persist();

                //   console.log(
                //     'evt.target.value',
                //     evt.target.value,
                //   );

                //   setSelectedTime(() => evt.target.value);
                // }}
              />
            </FormLayoutGroup>

            <Button size="xl" onClick={submit}>
              Предложить
            </Button>
          </FormLayout>
        </ModalPage>

        <ModalPage
          id={MODAL_TYPES.SELECT_TEAM}
          header={header(MODAL_TITLES.SELECT_TEAM)}
        >
          <FormLayout>
            <FormLayoutGroup>
              {teams.map((el) => {
                return (
                  <Radio
                    key={el.id}
                    name="radio"
                    value={el.title}
                    checked={
                      !!selectedTeam &&
                      selectedTeam?.title === el.title
                    }
                    onChange={(evt) => {
                      updateActiveModal(
                        MODAL_TYPES.CREATE_MATCH,
                      );
                      setSelectedTeam(() => el);
                    }}
                  >
                    {el.title}
                  </Radio>
                );
              })}
            </FormLayoutGroup>

            <Button
              size="xl"
              onClick={() =>
                updateActiveModal(MODAL_TYPES.CREATE_MATCH)
              }
            >
              Подтвердить
            </Button>
          </FormLayout>
        </ModalPage>

        <ModalPage
          id={MODAL_TYPES.INSPECT_MATCH}
          header={header(MODAL_TITLES.SELECT_TEAM)}
        >
          <Group
            header={<Header>Выбор команды</Header>}
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
