/* eslint-disable max-len */
import React from 'react';

import { IconStyleProps } from '../../type';

const Reset = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} fill={color} viewBox="0 0 1920 1920">
    <path
      d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0"
      fillRule="evenodd"
    />
  </svg>
);

export default Reset;
