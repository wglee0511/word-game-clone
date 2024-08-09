import { findIndex, forEach, includes, isEmpty, shuffle } from 'lodash';

import { TOTAL_KEY_BOARD } from './constant';
import { WORDLE_WORD } from './wordle';

export const getIsCorrectTextKey = (key: string) => includes(TOTAL_KEY_BOARD, key);
export const getIsEnglishKey = (key: string) => /[a-zA-Z]/.test(key);
export const getRandomWordleText = () => {
  const wordleTextArray = [...WORDLE_WORD];
  const shuffleTextArray = shuffle(wordleTextArray);

  return shuffleTextArray[0];
};

export const getIsCorrectWordleText = (text: string) => includes(WORDLE_WORD, text);

export const getCorrectPositionWrongArrays = (
  answer: string,
  targetText: string[],
  fullCorrectList?: Set<string>,
  fullPositionList?: Set<string>,
  fullWrongList?: Set<string>,
) => {
  const correctList: number[] = [];
  const correctTextList: string[] = [];
  const positionList = new Set<number>([]);
  const positionTextList = new Set<string>([]);
  const wrongList: (string | undefined)[] = [...targetText];

  if (!isEmpty(targetText)) {
    forEach(answer, (value, index) => {
      const isCorrect = value === targetText[index];
      if (isCorrect) {
        correctList.push(index);
        correctTextList.push(value);
        wrongList[index] = undefined;

        if (fullCorrectList) {
          fullCorrectList.add(value);
        }
      } else if (fullWrongList) {
        fullWrongList.add(targetText[index]);
      }
    });

    forEach(wrongList, (value, index) => {
      if (value === undefined) {
        return;
      }
      const isCorrect = includes(correctTextList, value);
      const isPosition = includes(answer, value);

      if (!isCorrect && isPosition) {
        positionTextList.add(value);
        wrongList[index] = undefined;

        if (fullPositionList && fullCorrectList) {
          fullPositionList.add(value);
        }
      }
    });

    forEach([...positionTextList], (value) => {
      const indexValue = findIndex(targetText, (innerValue) => innerValue === value);

      if (indexValue !== -1) {
        positionList.add(indexValue);
      }
    });
  }

  return { correctList, positionList: [...positionList] };
};

export const getResultTileText = (answer: string, confirmedTextList: string[][]) => {
  let tileText = '\n';

  forEach(confirmedTextList, (value) => {
    let line = '';

    forEach(value, (text, index) => {
      const answerTextIndex = findIndex(answer, (answerValue) => answerValue === text);

      const position = answer[index] === text ? '🟩' : '🟨';
      const correct = answerTextIndex === index ? '🟩' : position;
      const tile = answerTextIndex === -1 ? '⬛️' : correct;
      line += tile;
    });

    tileText += `${line}\n`;
  });

  return tileText;
};
