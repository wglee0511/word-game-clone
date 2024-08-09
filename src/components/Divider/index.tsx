import React from 'react';

import styled from 'styled-components';

import type { DividerProps, DividerStyleProps } from './type';

const S = {
  Container: styled.div<DividerStyleProps>`
    flex-shrink: 0;
    width: ${(props) =>
      typeof props.horizontal === 'number' ? `${props.horizontal}px` : props.horizontal};
    height: ${(props) =>
      typeof props.vertical === 'number' ? `${props.vertical}px` : props.vertical};
    background-color: ${(props) => props.backgroundColor};
  `,
};

/**
 * @component
 * margin 컴포넌트

 * @example
 * <Divider
 *   horizontal={10}      // optional
 *   vertical={10}        // optional
 *   backgroundColor=''   // optional
 * />
 */
const Divider = ({
  horizontal = 1,
  vertical = 1,
  backgroundColor = 'transparent',
}: DividerProps) => (
  <S.Container horizontal={horizontal} vertical={vertical} backgroundColor={backgroundColor} />
);

export default Divider;
