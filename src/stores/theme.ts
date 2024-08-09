import { COLORS } from 'src/themes/colors';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type ThemeValueType = {
  green: string;
  yellow: string;

  gray100: string;
  gray200: string;

  white: string;
  black: string;

  textColor: string;
  backgroundColor: string;
};

type ThemeType = ThemeValueType & {};

export const lightThemeState: ThemeValueType = {
  green: COLORS.lightGreen,
  yellow: COLORS.lightYellow,

  gray100: COLORS.lightGray100,
  gray200: COLORS.lightGray200,

  white: COLORS.white,
  black: COLORS.black,

  textColor: COLORS.black,
  backgroundColor: COLORS.white,
};

export const darkThemeState: ThemeValueType = {
  green: COLORS.darkGreen,
  yellow: COLORS.darkYellow,

  gray100: COLORS.darkGray100,
  gray200: COLORS.darkGray200,

  white: COLORS.darkWhite,
  black: COLORS.black,

  textColor: COLORS.darkWhite,
  backgroundColor: COLORS.darkBackgroundColor,
};

export const useThemeStore = create<ThemeType>()(devtools(() => ({ ...darkThemeState })));
