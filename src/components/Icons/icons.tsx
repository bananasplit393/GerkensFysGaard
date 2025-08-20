import React from 'react';
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';

// 1. Map desired icon names to their imported FontAwesome icon definitions.
//    Using faCalendarDays as it's a closer visual match to your original SVG.
const ICON_MAP: Record<string, IconDefinition> = {
  menu: faBars,
  x: faXmark,
  calendar: faCalendarDays,
};

// 2. Define a type for the icon names for robust type-safety.
export type IconName = keyof typeof ICON_MAP;

// 3. Define the props for our new generic Icon component.
//    This inherits all props from FontAwesomeIconProps (like 'size', 'className', 'color')
//    but makes our custom 'name' prop required.
export type IconProps = Omit<FontAwesomeIconProps, 'icon'> & {
  name: IconName;
};

// 4. Create a single, reusable Icon component.
export const Icon = ({ name, ...props }: IconProps) => {
  // Look up the icon definition from the map using the provided name.
  const iconDefinition = ICON_MAP[name];

  // Render the FontAwesomeIcon with the correct icon and pass down any other props.
  return <FontAwesomeIcon icon={iconDefinition} {...props} />;
};