import React from 'react';

import * as Icons from './icons';
import type { IconProps } from './type';

/**
 * @component
 * 아이콘 컴포넌트

 * @example
 * <Icon
 *   icon="CheckboxBlank"    // required
 *   size={10}             // required
 *   color={COLORS.white}  // optional
 * />
 */
const Icon = ({ icon, size, color, innerColor }: IconProps) => {
  const IconComponent = Icons[icon];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent size={size} color={color} innerColor={innerColor} />;
};

export default Icon;
