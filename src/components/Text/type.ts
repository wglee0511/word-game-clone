import type { CSSProperties } from 'react';

export interface TextProps {
  fontSize: number;
  fontWeight: number;
  color?: CSSProperties['color'];
  textAlign?: CSSProperties['textAlign'];
  whiteSpace?: CSSProperties['whiteSpace'];
  wordBreak?: CSSProperties['wordBreak'];
  letterSpacing?: CSSProperties['letterSpacing'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  textDecoration?: CSSProperties['textDecoration'];
  className?: string;
  numberOfLines?: number;
  maxWidth?: number;
}

export interface TextStyleProps extends Omit<TextProps, 'typography' | 'fontWeight'> {
  fontSize: number;
  lineHeight: string;
  fontWeight: number;
}
