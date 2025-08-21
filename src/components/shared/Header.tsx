import React, { useState } from 'react';
import DinFisFys from '../../assets/Geekens/DinFisFys.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

// Assuming your Button component is also typed and using Tailwind classes
import { Button } from '../Interacting/Button';

export const Header: React.FC = () => {
  // State for the mobile menu, explicitly typed as a boolean
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Navigation links, explicitly typed as an array of strings
  const navLinks: string[] = ['Ydelser', 'Om Os', 'Vores Team', 'Kontakt'];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={DinFisFys} alt="Logo" className="h-10 w-10 object-cover rounded-full" />
          <a href="#" className="text-2xl font-bold text-gray-800">
            Gerkens FysGaard
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-teal-600">
            <FontAwesomeIcon icon={faCalendarAlt} className="w-6 h-6" />
          </a>
          <Button>Bestil Tid Online</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-2 px-6 pt-2 pb-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
              >
                {link}
              </a>
            ))}
            <Button className="w-full mt-4">Bestil Tid Online</Button>
          </nav>
        </div>
      )}
    </header>
  );
};
