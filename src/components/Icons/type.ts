import type * as Icons from './icons';

export type IconOption = keyof typeof Icons;

export interface IconStyleProps {
  /** 아이콘 사이즈 */
  size: number;

  /** 아이콘 색상 */
  color?: string;
  innerColor?: string;
}

export interface IconProps extends IconStyleProps {
  /** 아이콘 종류 */
  icon: IconOption;
}

export interface IconPropsWithSVGProps extends IconStyleProps, React.SVGProps<SVGElement> {}
