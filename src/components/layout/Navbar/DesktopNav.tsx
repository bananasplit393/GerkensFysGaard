import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink, DropdownItem } from './constants';

import { BtmNavButton } from '../ui/BtmNavButton';


interface DesktopNavProps {
  navLinks: NavLink[];
  openDropdown: string | null;
  setOpenDropdown: (name: string | null) => void;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ navLinks, openDropdown, setOpenDropdown }) => {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      <ul className="flex items-center space-x-6">
        {navLinks.map((link) => (
          <li key={link.name} className="relative group">
            {link.dropdown ? (
              <div
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
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
                  <ul className="absolute z-[100] mt-0.25 w-72 bg-white text-black rounded-md shadow-lg 
                            py-2 border border-gray-200 transition-all duration-3000 ease-in-out">
                    {link.dropdown.map((item: DropdownItem) => (
                      <li key={item.label}>
                        <a
                          href={item.href ? item.href : "#"}
                          className="flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          <FontAwesomeIcon
                            icon={faBars}
                            className="w-4 h-4 text-gray-500"
                          />
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <BtmNavButton
                href={link.href}
                className="text-white text-sm font-semibold tracking-wider uppercase"
              >
                {link.name}
              </BtmNavButton>
            )}
          </li>
        ))}
        <li>
          {/* Search bar */}
          <a 
            href="#"
            className="hover:text-white transition-colors"
          >
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </li>
      </ul>
    </div>
  );
};
