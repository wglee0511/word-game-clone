import { ReactNode } from 'react';

export type ToastDuration = 'short' | 'long';

type Duration = {
  [key in ToastDuration]: number;
};

export const TOAST_DURATION: Duration = {
  short: 3000,
  long: 5000,
} as const;

export interface ToastProps {
  /** 스낵바 메시지 */
  message: string;

  /** 행동 유도 아이콘 */
  actionButton?: ReactNode;

  /** 글자 라인 수 */
  lines?: number;

  /** 닫기 아이콘 */
  hasCloseAffordance?: boolean;

  /** 스낵바 닫는 함수 */
  onCloseToast?: () => void;

  /** 노출하는 시간 */
  duration?: ToastDuration | number;
}

export interface ToastStyleProps {
  isOneLine?: boolean;
  isVisible?: boolean;
  hasMessage?: boolean;
  backgroundColor?: string;
}
