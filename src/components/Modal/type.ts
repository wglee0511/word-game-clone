import { HTMLAttributes } from 'react';

export interface ModalCommonProps extends HTMLAttributes<HTMLDivElement> {
  visible?: boolean;
  isVisibleAppBar?: boolean;
  onCloseModal?: () => void;
}

export interface FlexibleModalProps extends ModalCommonProps {
  width?: number;
  isDarkMode?: boolean;
}

export interface ModalSizeStyleProps {
  isVisibleAppBar: boolean;
  width?: number;
}
