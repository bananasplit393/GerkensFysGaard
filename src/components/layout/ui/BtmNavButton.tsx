import React from 'react';
interface BtmNavButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  to?: string;
}

export const BtmNavButton: React.FC<BtmNavButtonProps> = ({
  children,
  className,
  to,
  ...props
}) => {
  const baseStyles =
    'text-base w-full block text-gray-300 bg-transparent hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:bg-transparent';
  const combinedStyles = `${baseStyles} ${className || ''}`;


  return (
    <a className={combinedStyles} {...props}>
      {children}
    </a>
  );
};
