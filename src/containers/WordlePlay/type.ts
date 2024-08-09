import { KeyBoardElement } from 'src/types/element';
import { SetState } from 'src/types/react';

export interface CommonWordPlayProps {
  targetTextList: KeyBoardElement[][];
  setTargeTextList: SetState<KeyBoardElement[][]>;
  currentRowIndex: number;
  setCurrentRowIndex: SetState<number>;
  isAnswered: boolean;
}

export interface WordPlayContentProps extends CommonWordPlayProps {}

export interface WordPlayKeyboardProps extends CommonWordPlayProps {
  fullCorrectList: string[];
  fullPositionList: string[];
  fullWrongList: string[];
}

export interface WordlePlayResultModalProps
  extends Omit<CommonWordPlayProps, 'targetTextList' | 'currentRowIndex' | 'isAnswered'> {
  setIsAnswered: SetState<boolean>;
}
