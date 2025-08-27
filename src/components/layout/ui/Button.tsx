import React from 'react';

// Define an interface for the component's props.
// It accepts standard anchor tag attributes, plus 'children' and an optional 'className'.
interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	className?: string;
}

export const Button: React.FC<ButtonProps> = ({
	children,
	className,
	...props
}) => {
	// Define the base Tailwind classes for the button's appearance.
	const baseClasses =
		'inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-teal-700 transition-transform transform hover:scale-105';

	return (
		<a
			href="#"
			// Combine the base Tailwind classes with any additional classes passed in via props.
			className={`${baseClasses} ${className || ''}`}
			{...props}
		>
			{children}
		</a>
	);
};
