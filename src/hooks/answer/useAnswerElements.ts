import { useEffect, useLayoutEffect, useMemo, useState } from 'react';

import { filter, forEach, isNil } from 'lodash';
import { MAX_COUNT_LENGTH } from 'src/lib/constant';
import { differenceSet } from 'src/lib/set';
import { getCorrectPositionWrongArrays, getRandomWordleText } from 'src/lib/text';
import { useModalStore, useSystemStore } from 'src/stores';
import { KeyBoardElement } from 'src/types/element';

import { AnswerElementProps } from './type';

const useAnswerElements = ({
  targetTextList,
  currentRowIndex,
  setCurrentRowIndex,
  setTargeTextList,
}: AnswerElementProps) => {
  const { answer, result, localConfirmedTextList } = useSystemStore();
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const confirmedTextList = useMemo(() => {
    const maximumIndex = currentRowIndex - 1;
    const confirmedList = filter(targetTextList, (_, index) => index <= maximumIndex);
    return confirmedList;
  }, [currentRowIndex, targetTextList]);

  const filteredFullList = useMemo(() => {
    const fullCorrectList = new Set<string>();
    const fullPositionList = new Set<string>();
    const fullWrongList = new Set<string>();

    forEach(confirmedTextList, (confirmedValue) => {
      if (answer !== undefined) {
        getCorrectPositionWrongArrays(
          answer || '',
          confirmedValue,
          fullCorrectList,
          fullPositionList,
          fullWrongList,
        );
      }
    });
    const complementPositionList = differenceSet(fullPositionList, fullCorrectList);
    const complementWrongCorrectList = differenceSet(fullWrongList, fullCorrectList);
    const complementWrongPositionLust = differenceSet(complementWrongCorrectList, fullPositionList);

    return {
      fullCorrectList: [...fullCorrectList],
      fullPositionList: [...complementPositionList] as string[],
      fullWrongList: [...complementWrongPositionLust] as string[],
    };
  }, [answer, confirmedTextList]);

  useEffect(() => {
    const isNilAnswer = isNil(answer);

    if (isNilAnswer) {
      const wordleText = getRandomWordleText();
      useSystemStore.setState({ answer: wordleText });
    }
  }, [answer]);

  useEffect(() => {
    forEach(confirmedTextList, (value, index) => {
      const fullText = value.join('');
      setIsAnswered(() => fullText === answer);
      if (index === MAX_COUNT_LENGTH - 1) {
        setIsAnswered(() => true);
      }
    });
  }, [answer, confirmedTextList, currentRowIndex, targetTextList]);

  useEffect(() => {
    const isNilAnswer = isNil(answer);
    const isNilResult = isNil(result);

    if (!isNilAnswer && isNilResult && isAnswered) {
      useSystemStore.setState({
        localConfirmedTextList: confirmedTextList,
        result: { date: new Date() },
      });
    }
  }, [answer, confirmedTextList, isAnswered, result]);

  useEffect(() => {
    const isNilResult = isNil(result);
    if (!isNilResult) {
      setIsAnswered(() => true);
      useModalStore.setState({ isVisibleResultModal: true });
    }
  }, [localConfirmedTextList, result, setCurrentRowIndex]);

  useLayoutEffect(() => {
    if (!isNil(localConfirmedTextList)) {
      const confirmedTextListLength = localConfirmedTextList?.length || 0;
      setCurrentRowIndex(() => {
        if (confirmedTextListLength === MAX_COUNT_LENGTH) {
          return MAX_COUNT_LENGTH;
        }
        return confirmedTextListLength;
      });

      setTargeTextList(() => {
        const list = [...(localConfirmedTextList as KeyBoardElement[][])];
        return confirmedTextListLength === MAX_COUNT_LENGTH ? list : [...list, []];
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isAnswered, filteredFullList, setIsAnswered };
};

export default useAnswerElements;
