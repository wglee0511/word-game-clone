import React, { useState } from 'react';

import { WordlePlayContents, WordlePlayKeyboard, WordlePlayTop } from 'src/containers/WordlePlay';
import WordlePlayResultModal from 'src/containers/WordlePlay/WordlePlayResultModal';
import useAnswerElements from 'src/hooks/answer/useAnswerElements';
import { useModalStore } from 'src/stores';
import { KeyBoardElement } from 'src/types/element';
import styled from 'styled-components';

const S = {
  Container: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  `,
};

const WordlePlay = () => {
  const { isVisibleResultModal } = useModalStore();

  const [currentRowIndex, setCurrentRowIndex] = useState<number>(0);
  const [targetTextList, setTargeTextList] = useState<KeyBoardElement[][]>([[]]);

  const { isAnswered, filteredFullList, setIsAnswered } = useAnswerElements({
    targetTextList,
    currentRowIndex,
    setCurrentRowIndex,
    setTargeTextList,
  });

  return (
    <S.Container>
      <WordlePlayTop />
      <WordlePlayContents
        setTargeTextList={setTargeTextList}
        targetTextList={targetTextList}
        currentRowIndex={currentRowIndex}
        setCurrentRowIndex={setCurrentRowIndex}
        isAnswered={isAnswered}
      />
      <WordlePlayKeyboard
        setTargeTextList={setTargeTextList}
        targetTextList={targetTextList}
        currentRowIndex={currentRowIndex}
        setCurrentRowIndex={setCurrentRowIndex}
        isAnswered={isAnswered}
        fullCorrectList={filteredFullList.fullCorrectList}
        fullPositionList={filteredFullList.fullPositionList}
        fullWrongList={filteredFullList.fullWrongList}
      />
      {isVisibleResultModal && (
        <WordlePlayResultModal
          setCurrentRowIndex={setCurrentRowIndex}
          setTargeTextList={setTargeTextList}
          setIsAnswered={setIsAnswered}
        />
      )}
    </S.Container>
  );
};

export default WordlePlay;
