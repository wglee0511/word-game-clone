import { create } from 'zustand';

type ToastValueType = {
  message: string;
  isVisible: boolean;
};

export type ToastType = ToastValueType & {
  setToast: (message: string) => void;
  close: () => void;
};

const initialToastState: ToastValueType = {
  message: '',
  isVisible: false,
};

export const useToastStore = create<ToastType>()((set) => ({
  ...initialToastState,
  setToast: (message) => set(() => ({ message, isVisible: true })),
  close: () => set(() => ({ message: '', isVisible: false })),
}));
