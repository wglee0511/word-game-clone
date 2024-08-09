import { WithRequiredProperty } from 'src/types/common';

export interface DividerProps {
  /** 너비 */
  horizontal?: number | string;

  /** 높이 */
  vertical?: number | string;

  /** 배경 색상 */
  backgroundColor?: string;
}

export interface DividerStyleProps
  extends WithRequiredProperty<DividerProps, 'horizontal' | 'vertical'> {}
