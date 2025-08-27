import React from 'react';

// It extends the standard HTML anchor element attributes.
interface BtmNavButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const BtmNavButton: React.FC<BtmNavButtonProps> = ({
  children,
  className,
  ...props
}) => {
  const baseStyles =
        'w-full block text-gray-300 bg-transparent hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 py-0 px-0 font-normal shadow-none rounded-none text-base';

  // This allows for easy customization when you use the component.
  const combinedStyles = `${baseStyles} ${className || ''}`;

  return (
    <a className={combinedStyles} {...props}>
      {children}
    </a>
  );
};
