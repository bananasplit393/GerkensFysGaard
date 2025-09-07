
import React, { useState } from 'react';
import DinFisFys from '../../assets/Geekens/DinFisFys.png';
import Logo from '../../assets/img/Logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/Button';
import { BtmNavButton } from './ui/BtmNavButton';
// Ensure BtmNavButtonProps includes 'to' as a string prop in its definition

export const Header: React.FC = () => {
  // State for the mobile menu, explicitly typed as a boolean
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Navigation links, explicitly typed as an array of strings
  const navLinks: { name: string; href: string }[] = [ ];

  return (
  <header className="bg-white/40 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <a href="https://holistisksundhedshus.dk/">
            <img
              src={Logo}
              alt="Holistisk Logo"
              className="ml-2 h-12 w-12 object-cover rounded-full cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
          <a href="/alexander">
            <img
              src={DinFisFys}
              alt="Alex Logo"
              className="ml-2 h-12 w-12 object-cover rounded-full cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
          <a href="/" className="text-2xl font-bold text-gray-800">
            Gerkens FysGaard
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 whitespace-nowrap">
          {navLinks.map((link) => (
            <BtmNavButton
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-teal-600 transition-colors duration-300 whitespace-nowrap font-semibold"
            >
              {link.name}
            </BtmNavButton>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://ezme.io/c/xEF/zGvg" className="text-gray-600 hover:text-teal-600">
            <FontAwesomeIcon icon={faCalendarAlt} className="w-6 h-6" />
          </a>
          <Button href="https://ezme.io/c/xEF/zGvg">
            Bestil Tid Online
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button href="https://ezme.io/c/xEF/zGvg" className="w-full mt-4" onClick={() => setIsMenuOpen(false)}>
              Book Nu
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-4 px-6 pt-4 pb-6">
            <Button href="https://ezme.io/c/xEF/zGvg" className="w-full mt-4" onClick={() => setIsMenuOpen(false)}>
              Bestil Tid Online
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
