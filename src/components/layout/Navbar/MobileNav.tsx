import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from './constants';

interface MobileNavProps {
  navLinks: NavLink[];
  openDropdown: string | null;
  handleDropdownToggle: (name: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ navLinks, openDropdown, handleDropdownToggle }) => (
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
                  className={`w-3 h-3 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`}
                />
              </button>
              {openDropdown === link.name && (
                <ul className="pl-4 mt-1">
                  {link.dropdown.map((item) => (
                    <li key={item.label || item.href}>
                      <a
                        href={item.href || "#"}
                        className="block py-2 px-3 rounded-md hover:bg-gray-700"
                      >
                        {item.label}
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
);
