import React, { useCallback } from 'react';

import { includes, map } from 'lodash';
import Icon from 'src/components/Icons';
import Text from 'src/components/Text';
import { BOTTOM_KEY_BOARD, MIDDLE_KEY_BOARD, TOP_KEYBOARD } from 'src/lib/constant';
import { setKeyBoardEvent } from 'src/lib/event';
import { useSystemStore, useThemeStore, useToastStore } from 'src/stores';
import { KeyBoardElement } from 'src/types/element';
import styled from 'styled-components';

import { WordPlayKeyboardProps } from './type';

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  `,
  Wrapper: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
  Row: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    gap: 5px;

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  `,
  Cell: styled.button<{ isTextType: boolean }>`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: ${(props) => (props.isTextType ? '60px' : '100px')};
    height: 58px;
    padding: 0 6px;
    border-radius: 4px;

    transition-property: min-width;
    transition-duration: 1s;

    @media screen and (max-width: 600px) {
      min-width: ${(props) => (props.isTextType ? '8%' : '13%')};
    }
  `,
};

const WordlePlayKeyboard = ({
  setTargeTextList,
  targetTextList,
  setCurrentRowIndex,
  currentRowIndex,
  isAnswered,
  fullCorrectList,
  fullPositionList,
  fullWrongList,
}: WordPlayKeyboardProps) => {
  const { setLocalConfirmedTextList } = useSystemStore();
  const { textColor, gray100, gray200, yellow, green, white } = useThemeStore();
  const { setToast } = useToastStore();

  const onClickButton = useCallback(
    (key: KeyBoardElement) => {
      setKeyBoardEvent(
        key,
        isAnswered,
        targetTextList,
        currentRowIndex,
        setTargeTextList,
        setCurrentRowIndex,
        setToast,
        setLocalConfirmedTextList,
      );
    },
    [
      currentRowIndex,
      isAnswered,
      setCurrentRowIndex,
      setLocalConfirmedTextList,
      setTargeTextList,
      setToast,
      targetTextList,
    ],
  );

  const renderRow = useCallback(
    (list: KeyBoardElement[]) => (
      <S.Row>
        {map(list, (value) => {
          const isBackspace = value === 'Backspace';
          const isEnter = value === 'Enter';
          const isCorrect = includes(fullCorrectList, value);
          const isPosition = includes(fullPositionList, value);
          const isWrong = includes(fullWrongList, value);
          const isConfirmed = isCorrect || isPosition || isWrong;

          const wrongColor = isWrong ? gray200 : gray100;
          const positionColor = isPosition ? yellow : wrongColor;
          const backgroundColor = isCorrect ? green : positionColor;

          return (
            <S.Cell
              key={`${list.join('')}-${value}`}
              style={{ backgroundColor }}
              onClick={() => onClickButton(value)}
              isTextType={!isBackspace && !isEnter}
            >
              {isBackspace ? (
                <Icon icon="Backspace" size={24} color={textColor} />
              ) : (
                <Text
                  fontSize={isEnter ? 0.75 : 1.25}
                  fontWeight={700}
                  color={isConfirmed ? white : textColor}
                >
                  {value.toUpperCase()}
                </Text>
              )}
            </S.Cell>
          );
        })}
      </S.Row>
    ),
    [
      fullCorrectList,
      fullPositionList,
      fullWrongList,
      gray100,
      gray200,
      green,
      onClickButton,
      textColor,
      white,
      yellow,
    ],
  );

  return (
    <S.Container>
      <S.Wrapper>
        {renderRow([...TOP_KEYBOARD])}
        {renderRow([...MIDDLE_KEY_BOARD])}
        {renderRow([...BOTTOM_KEY_BOARD])}
      </S.Wrapper>
    </S.Container>
  );
};

export default WordlePlayKeyboard;
