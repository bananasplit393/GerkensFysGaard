import React, { useState } from 'react';
import { navLinks } from './constants';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

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
        <a href="/" className="text-lg font-bold hover:text-white transition-colors">
          Holistisk Sundhedshus i Aarhus
        </a>

        {/* Right Side: Desktop Menu Component */}
        <DesktopNav navLinks={navLinks} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        
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

      {/* Mobile Menu Panel Component */}
      {isMobileMenuOpen && (
        <MobileNav
          navLinks={navLinks}
          openDropdown={openDropdown}
          handleDropdownToggle={handleDropdownToggle}
        />
      )}
    </nav>
  );
};
