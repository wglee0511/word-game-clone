import React, { useCallback, useEffect, useMemo } from 'react';

import { isNil, map } from 'lodash';
import Text from 'src/components/Text';
import { getTargetCellColor } from 'src/lib/color';
import { MAX_COUNT_LENGTH, MAX_WORD_LENGTH } from 'src/lib/constant';
import { setKeyBoardEvent } from 'src/lib/event';
import { getCorrectPositionWrongArrays } from 'src/lib/text';
import { useSystemStore, useThemeStore, useToastStore } from 'src/stores';
import styled from 'styled-components';

import { WordPlayContentProps } from './type';

const S = {
  Container: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Wrapper: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  `,
  Row: styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    @media screen and (max-width: 300px) {
      width: 100%;
    }
  `,
  Cell: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    border: 1px solid;

    @media screen and (max-width: 300px) {
      width: 24%;
    }
  `,
};

const WordlePlayContents = ({
  setTargeTextList,
  targetTextList,
  setCurrentRowIndex,
  currentRowIndex,
  isAnswered,
}: WordPlayContentProps) => {
  const { isDarkTheme, answer, setLocalConfirmedTextList } = useSystemStore();
  const { setToast } = useToastStore();
  const { textColor, gray100, gray200, green, yellow, white } = useThemeStore();

  const onKeyBoardDown = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;
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

  const renderContents = useMemo(
    () =>
      map(Array(MAX_COUNT_LENGTH), (_1, rowIndex) => {
        const isConfirmWord = rowIndex < currentRowIndex;
        const { correctList, positionList } = getCorrectPositionWrongArrays(
          answer || '',
          isConfirmWord ? targetTextList[rowIndex] : [],
        );

        return (
          <S.Row key={`${answer}-${rowIndex}`}>
            {map(Array(MAX_WORD_LENGTH), (_2, index) => {
              const target = (targetTextList[rowIndex] || [])[index];
              const isNilTargetTextList = isNil(target);
              const innerTextColor = isDarkTheme ? textColor : white;

              const { cellBackgroundColor } = getTargetCellColor(
                index,
                green,
                yellow,
                gray200,
                correctList,
                positionList,
              );

              return (
                <S.Cell
                  key={`${answer}-${rowIndex}-${index}`}
                  style={{
                    borderColor: isConfirmWord ? cellBackgroundColor : gray100,
                    backgroundColor: isConfirmWord ? cellBackgroundColor : 'none',
                  }}
                >
                  <Text
                    fontSize={2}
                    fontWeight={700}
                    color={isConfirmWord ? innerTextColor : textColor}
                  >
                    {isNilTargetTextList ? '' : target.toUpperCase()}
                  </Text>
                </S.Cell>
              );
            })}
          </S.Row>
        );
      }),
    [
      currentRowIndex,
      answer,
      targetTextList,
      isDarkTheme,
      textColor,
      white,
      green,
      yellow,
      gray200,
      gray100,
    ],
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyBoardDown);

    return () => window.removeEventListener('keydown', onKeyBoardDown);
  }, [onKeyBoardDown]);

  return (
    <S.Container>
      <S.Wrapper>{renderContents}</S.Wrapper>
    </S.Container>
  );
};

export default WordlePlayContents;
