import React, { PropsWithChildren, useLayoutEffect } from 'react';

import { isNil } from 'lodash';
import { useSystemStore, useThemeStore, useToastStore } from 'src/stores';
import { darkThemeState, lightThemeState } from 'src/stores/theme';
import styled, { StyleSheetManager } from 'styled-components';

import Toast from '../Toast';

const S = {
  Container: styled.div`
    flex: 1;
    width: 100vw;
    height: 100vh;
  `,
};

const Theme = ({ children }: PropsWithChildren) => {
  const { isDarkTheme } = useSystemStore();
  const { backgroundColor } = useThemeStore();
  const { isVisible, message, close } = useToastStore();

  useLayoutEffect(() => {
    if (isNil(isDarkTheme)) {
      const isDarkMode =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      useSystemStore.setState({ isDarkTheme: isDarkMode });
      useThemeStore.setState(isDarkMode ? darkThemeState : lightThemeState);
    } else {
      useThemeStore.setState(isDarkTheme ? darkThemeState : lightThemeState);
    }
  }, [isDarkTheme]);

  return (
    <StyleSheetManager shouldForwardProp={(name) => !name.startsWith('$')}>
      <S.Container style={{ backgroundColor, flex: 1 }}>
        {isVisible && <Toast message={message} onCloseToast={close} />}
        {children}
      </S.Container>
    </StyleSheetManager>
  );
};

export default Theme;
