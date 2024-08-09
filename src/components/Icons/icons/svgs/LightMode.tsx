import React from 'react';

import { IconStyleProps } from '../../type';

const LightMode = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_429_11039)">
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M20 12H21" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M3 12H4" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 20L12 21" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M12 3L12 4" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M17.6569 17.6569L18.364 18.364"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M5.63605 5.63604L6.34315 6.34315"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M6.34314 17.6569L5.63603 18.364"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M18.364 5.63604L17.6568 6.34315"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_429_11039">
        <rect width={size || 24} height={size || 24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default LightMode;
