export const TOP_KEYBOARD = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'] as const;

export const MIDDLE_KEY_BOARD = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'] as const;

export const BOTTOM_KEY_BOARD = ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'] as const;

export const TOTAL_KEY_BOARD = [...TOP_KEYBOARD, ...MIDDLE_KEY_BOARD, ...BOTTOM_KEY_BOARD] as const;

export const MAX_WORD_LENGTH = 5;
export const MAX_COUNT_LENGTH = 6;
