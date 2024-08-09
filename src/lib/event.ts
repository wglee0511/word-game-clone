import { map } from 'lodash';
import { SystemType } from 'src/stores/system';
import { ToastType } from 'src/stores/toast';
import { KeyBoardElement } from 'src/types/element';
import { SetState } from 'src/types/react';

import { MAX_COUNT_LENGTH, MAX_WORD_LENGTH } from './constant';
import { getIsCorrectTextKey, getIsCorrectWordleText, getIsEnglishKey } from './text';

export const setKeyBoardEvent = (
  key: string,
  isAnswered: boolean,
  targetTextList: KeyBoardElement[][],
  currentRowIndex: number,
  setTargeTextList: SetState<KeyBoardElement[][]>,
  setCurrentRowIndex: SetState<number>,
  setToast: ToastType['setToast'],
  setLocalConfirmedTextList: SystemType['setLocalConfirmedTextList'],
) => {
  const isCorrectKey = getIsCorrectTextKey(key);
  const isEnglishKey = getIsEnglishKey(key);

  if (!isEnglishKey) {
    setToast('Please check the language status');
    return;
  }

  if (!isCorrectKey) {
    return;
  }

  if (isAnswered) {
    return;
  }

  const correctKey = key as KeyBoardElement;
  const isMaxLength = targetTextList[currentRowIndex]?.length === MAX_WORD_LENGTH;
  const isMaxRow = targetTextList.length === MAX_COUNT_LENGTH;

  switch (correctKey) {
    case 'Backspace': {
      setTargeTextList((prev) => {
        const target = [...prev];
        return map(target, (value, rowIndex) => {
          if (rowIndex === currentRowIndex) {
            const row = [...value];
            row.pop();
            return [...row];
          }

          return [...value];
        });
      });
      break;
    }
    case 'Enter': {
      if (isMaxRow) {
        setCurrentRowIndex(() => MAX_COUNT_LENGTH);
        break;
      }

      if (isMaxLength) {
        const currentText = targetTextList[currentRowIndex].join('');
        const isCorrectText = getIsCorrectWordleText(currentText);
        if (!isCorrectText) {
          setToast('Not in word list');
        } else {
          setLocalConfirmedTextList(targetTextList as string[][]);
          setCurrentRowIndex((prev) => prev + 1);
          setTargeTextList((prev) => [...prev, []]);
        }
        break;
      } else {
        setToast('Not enough letters');
      }

      break;
    }

    default: {
      if (isMaxLength) {
        break;
      }

      setTargeTextList((prev) => {
        const target = [...prev];
        return map(target, (value, rowIndex) => {
          if (rowIndex === currentRowIndex) {
            return [...value, correctKey];
          }

          return [...value];
        });
      });
      break;
    }
  }
};
