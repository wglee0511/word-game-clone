/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { ReactNode, useCallback, useMemo } from 'react';

import Icon from 'src/components/Icons';
import ConfirmModal from 'src/components/Modal/ConfirmModal';
import Text from 'src/components/Text';
import { MAX_COUNT_LENGTH } from 'src/lib/constant';
import { getTimeTypeBarYYYYMMDDHHSS } from 'src/lib/day';
import { getResultTileText } from 'src/lib/text';
import { useModalStore, useSystemStore, useThemeStore, useToastStore } from 'src/stores';
import styled from 'styled-components';

import { WordlePlayResultModalProps } from './type';

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    min-width: 250px;
    min-height: 150px;
    padding: 15px;
    gap: 15px;
  `,
  Row: styled.div`
    display: flex;
    display: flex;
    justify-content: space-between;
  `,
};

const WordlePlayResultModal = ({
  setTargeTextList,
  setIsAnswered,
  setCurrentRowIndex,
}: WordlePlayResultModalProps) => {
  const { textColor } = useThemeStore();
  const { result, answer, localConfirmedTextList } = useSystemStore();
  const { isVisibleResultModal } = useModalStore();
  const { setToast } = useToastStore();

  const score = useMemo(
    () => `${localConfirmedTextList?.length || 0}/${MAX_COUNT_LENGTH}`,
    [localConfirmedTextList?.length],
  );

  const onClickResetButton = useCallback(() => {
    setTargeTextList(() => [[]]);
    setIsAnswered(() => false);
    setCurrentRowIndex(() => 0);
    useSystemStore.setState({
      result: undefined,
      answer: undefined,
      localConfirmedTextList: undefined,
    });
    useModalStore.setState({ isVisibleResultModal: false });
  }, [setCurrentRowIndex, setIsAnswered, setTargeTextList]);

  const onClickShareButton = useCallback(async () => {
    if (answer && result) {
      const date = getTimeTypeBarYYYYMMDDHHSS(result?.date);
      const tile = getResultTileText(answer, localConfirmedTextList || [[]]);

      const fullText = `
      \nWordle ${date} 
      \nScore: ${score}
      
      ${tile}\n
      `;

      try {
        await navigator.clipboard.writeText(fullText);
        setToast('Result Text Copy Success');
      } catch (error) {
        setToast('Result Text Copy Failed');
      }
    }
  }, [answer, localConfirmedTextList, result, score, setToast]);

  const renderRow = useCallback(
    (title: string, node: ReactNode) => (
      <S.Row>
        <Text fontSize={1.25} fontWeight={500} color={textColor}>
          {title}
        </Text>

        {node}
      </S.Row>
    ),
    [textColor],
  );

  return (
    <ConfirmModal
      onCloseModal={() => {
        useModalStore.setState({ isVisibleResultModal: false });
      }}
      description="Result"
      visible={isVisibleResultModal}
      isVisibleAppBar
    >
      <S.Container>
        {renderRow(
          'Result',
          <Text fontSize={1} fontWeight={400} color={textColor}>
            {answer}
          </Text>,
        )}
        {renderRow(
          'Try',
          <Text fontSize={1} fontWeight={400} color={textColor}>
            {score}
          </Text>,
        )}
        {renderRow(
          'Share',
          <button onClick={onClickShareButton}>
            <Icon icon="Share" size={24} color={textColor} />
          </button>,
        )}
        {renderRow(
          'Reset',
          <button onClick={onClickResetButton}>
            <Icon icon="Reset" size={24} color={textColor} />
          </button>,
        )}
      </S.Container>
    </ConfirmModal>
  );
};

export default WordlePlayResultModal;
