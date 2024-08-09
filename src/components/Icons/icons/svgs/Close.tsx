/* eslint-disable max-len */
import React from 'react';

import { IconStyleProps } from '../../type';

const Close = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="-0.5 0 25 25" fill="none">
    <path
      d="M3 21.32L21 3.32001"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 3.32001L21 21.32"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Close;
