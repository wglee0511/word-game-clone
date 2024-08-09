import { create } from 'zustand';

type ModalValueType = {
  isVisibleResultModal: boolean;
};

export type ModalType = ModalValueType & {};

const initialModalState: ModalValueType = { isVisibleResultModal: false };

export const useModalStore = create<ModalType>()(() => ({ ...initialModalState }));
