// src/components/Icon.tsx

import { ICONS, IconName, IconProps } from './icons';

// Define the component's props
type Props = {
  name: IconName; // Use the type-safe name
} & IconProps; // Allow passing standard SVG props

export function Icon({ name, ...props }: Props) {
  // Look up the component in the map
  const IconComponent = ICONS[name];

  if (!IconComponent) {
    // Optional: Render a fallback or null
    return null;
  }

  // Set default size if not provided
  const { width = '24', height = '24', ...rest } = props;

  return <IconComponent width={width} height={height} {...rest} />;
}
