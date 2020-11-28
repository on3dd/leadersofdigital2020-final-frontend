import React, { useMemo } from 'react';

import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';

type PanelWrapperProps = {
  id: string;
  fetching: boolean;
  modal?: JSX.Element;
  children: JSX.Element;
};

const PanelWrapper: React.FC<PanelWrapperProps> = ({
  id,
  fetching,
  modal,
  children,
}: PanelWrapperProps) => {
  const popout = useMemo(() => {
    return fetching ? <ScreenSpinner /> : null;
  }, [fetching]);

  return (
    <View activePanel={id} popout={popout} modal={modal}>
      {React.cloneElement(children, { id })}
    </View>
  );
};

export default PanelWrapper;
