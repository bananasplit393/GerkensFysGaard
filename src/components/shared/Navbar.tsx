import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faChevronDown,
	faSearch,
	faTimes, // Added for the mobile menu close icon
} from '@fortawesome/free-solid-svg-icons';

// --- Type Definitions for our data ---
interface NavLink {
	name: string;
	dropdown?: string[];
}

// --- Component Data ---
const navLinks: NavLink[] = [
	{ name: 'FORSIDE' },
	{ name: 'OM', dropdown: [] },
	{
		name: 'KONSULTATIONER OG BEHANDLINGER',
		dropdown: [
			'Telefonkonsultation',
			'Akupunktur',
			'Biodynamisk Kranio Sakral terapi',
			'Diabetes og livsstilsforløb',
			'Fysiurgisk massage',
			'Bindevævs massage',
			'RenKost',
		],
	},
	{ name: 'SYMPTOMER', dropdown: [] },
	{ name: 'BOOK TID' },
	{ name: 'PRISER' },
	{ name: 'EVENTS' },
	{ name: 'OPSKRIFTER' },
	{ name: 'BLOG' },
];

export const Navbar: React.FC = () => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

	const handleDropdownToggle = (name: string) => {
		setOpenDropdown(openDropdown === name ? null : name);
	};

	return (
		<nav className="bg-gray-700 text-gray-200 shadow-lg relative z-20">
			<div className="container mx-auto px-4 flex justify-between items-center h-20">
				{/* Left Side: Brand */}
				<a
					href="/"
					className="text-lg font-bold hover:text-white transition-colors"
				>
					Holistisk Sundhedshus i Aarhus
				</a>

				{/* Right Side: Desktop Menu */}
				<div className="hidden lg:flex items-center space-x-6">
					<ul className="flex items-center space-x-6">
						{navLinks.map((link) => (
							<li
								key={link.name}
								className="relative group"
							>
								{link.dropdown ? (
									<div>
										<button
											onClick={() => handleDropdownToggle(link.name)}
											className="flex items-center space-x-1 hover:text-white focus:outline-none transition-colors"
										>
											<span className="text-sm font-semibold uppercase tracking-wider">
												{link.name}
											</span>
											<FontAwesomeIcon
												icon={faChevronDown}
												className="w-3 h-3 transition-transform group-hover:rotate-180"
											/>
										</button>
										{openDropdown === link.name && (
											<ul className="absolute mt-2 w-72 bg-white text-black rounded-md shadow-lg py-2">
												{link.dropdown.map((item) => (
													<li key={item}>
														<a
															href="#"
															className="flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-100"
														>
															<FontAwesomeIcon
																icon={faBars}
																className="w-4 h-4 text-gray-500"
															/>
															<span>{item}</span>
														</a>
													</li>
												))}
											</ul>
										)}
									</div>
								) : (
									<a
										href="#"
										className="text-sm font-semibold uppercase tracking-wider hover:text-white transition-colors"
									>
										{link.name}
									</a>
								)}
							</li>
						))}
						<li>
							<a
								href="#"
								className="hover:text-white transition-colors"
							>
								<FontAwesomeIcon icon={faSearch} />
							</a>
						</li>
					</ul>
				</div>

				{/* Mobile Menu Button */}
				<div className="lg:hidden">
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="text-white focus:outline-none"
					>
						<FontAwesomeIcon
							icon={isMobileMenuOpen ? faTimes : faBars}
							className="w-6 h-6"
						/>
					</button>
				</div>
			</div>

			{/* Mobile Menu Panel */}
			{isMobileMenuOpen && (
				<div className="lg:hidden bg-gray-800 text-white absolute w-full">
					<ul className="flex flex-col p-4 space-y-2">
						{navLinks.map((link) => (
							<li key={link.name}>
								{link.dropdown ? (
									<div>
										<button
											onClick={() => handleDropdownToggle(link.name)}
											className="w-full text-left flex justify-between items-center py-2 px-3 rounded-md hover:bg-gray-700"
										>
											<span>{link.name}</span>
											<FontAwesomeIcon
												icon={faChevronDown}
												className={`w-3 h-3 transition-transform ${
													openDropdown === link.name ? 'rotate-180' : ''
												}`}
											/>
										</button>
										{openDropdown === link.name && (
											<ul className="pl-4 mt-1">
												{link.dropdown.map((item) => (
													<li key={item}>
														<a
															href="#"
															className="block py-2 px-3 rounded-md hover:bg-gray-700"
														>
															{item}
														</a>
													</li>
												))}
											</ul>
										)}
									</div>
								) : (
									<a
										href="#"
										className="block py-2 px-3 rounded-md hover:bg-gray-700"
									>
										{link.name}
									</a>
								)}
							</li>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};
