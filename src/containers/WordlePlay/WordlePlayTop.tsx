/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useCallback, useRef } from 'react';

import Icon from 'src/components/Icons';
import Text from 'src/components/Text';
import { useSystemStore, useThemeStore } from 'src/stores';
import styled from 'styled-components';

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
  `,
};

const WordlePlayTop = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isDarkTheme } = useSystemStore();
  const { textColor, gray100 } = useThemeStore();

  const onPressTheme = useCallback(() => {
    useSystemStore.setState({ isDarkTheme: !isDarkTheme });
    if (buttonRef?.current) {
      buttonRef.current.blur();
    }
  }, [isDarkTheme]);

  return (
    <S.Container style={{ borderBottom: `1px solid ${gray100}` }}>
      <div />
      <Text fontSize={2.25} fontWeight={700} color={textColor}>
        Wordle
      </Text>
      <button ref={buttonRef} onClick={onPressTheme}>
        <Icon icon={isDarkTheme ? 'LightMode' : 'DarkMode'} size={24} color={textColor} />
      </button>
    </S.Container>
  );
};

export default WordlePlayTop;
