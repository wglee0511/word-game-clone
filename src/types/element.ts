import { BOTTOM_KEY_BOARD, MIDDLE_KEY_BOARD, TOP_KEYBOARD } from 'src/lib/constant';

export type TopKeyBoardElement = (typeof TOP_KEYBOARD)[number];
export type MiddleKeyBoardElement = (typeof MIDDLE_KEY_BOARD)[number];
export type BottomKeyBoardElement = (typeof BOTTOM_KEY_BOARD)[number];

export type KeyBoardElement = TopKeyBoardElement | MiddleKeyBoardElement | BottomKeyBoardElement;
