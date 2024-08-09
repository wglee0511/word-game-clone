import { create } from 'zustand';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';

type SystemValueType = {
  isDarkTheme?: boolean;
  answer?: string;
  localConfirmedTextList?: string[][];
  result?: {
    date: Date;
  };
};

export type SystemType = SystemValueType & {
  setLocalConfirmedTextList: (list: string[][]) => void;
};

const initialSystemState: SystemValueType = {
  isDarkTheme: undefined,
  answer: undefined,
  localConfirmedTextList: undefined,
  result: undefined,
};

export const useSystemStore = create<SystemType>()(
  devtools(
    persist(
      (set) => ({
        ...initialSystemState,
        setLocalConfirmedTextList: (list: string[][]) =>
          set(() => ({ localConfirmedTextList: list })),
      }),
      {
        name: 'system',
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);
