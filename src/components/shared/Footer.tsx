
import React from 'react';
import { BtmNavButton } from '../Interacting/BtmNavButton';


export const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
                {/* Column 1: Brand */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">
                        Holistisk Sundhedshus
                    </h3>
                    <p className="text-sm">Dine partnere inden for sundhed og vejen til et bedre liv.</p>
                </div>

                {/* Column 2: Navigation */}
                <div>
                    <h4 className="font-semibold text-lg text-white mb-4">Navigation</h4>
                    <ul className="space-y-2">
                        <li>
                            <BtmNavButton
                                href="#"
                            >
                                Forside
                            </BtmNavButton>
                        </li>
                        <li>
                            <BtmNavButton
                                href="#"
                            >
                                Ydelser
                            </BtmNavButton>
                        </li>
                        <li>
                            <BtmNavButton
                                href="#"
                            >
                                Om Os
                            </BtmNavButton>
                        </li>
                        <li>
                            <BtmNavButton
                                href="#"
                            >
                                Bestil Tid Online
                            </BtmNavButton>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Kontakt */}
                <div>
                    <h4 className="font-semibold text-lg text-white mb-4">Kontakt Os</h4>
                    <ul className="space-y-2">
                        <li>Sundhedsvej 123, 8000 Aarhus C</li>
                        <li>+45 12 34 56 78</li>
                        <li>kontakt@balanceandmotion.com</li>
                    </ul>
                </div>

                {/* Column 4: Hours */}
                <div>
                    <h4 className="font-semibold text-lg text-white mb-4">
                        Åbningstider
                    </h4>
                    <ul className="space-y-2">
                        <li>Man - Fre: 08:00 - 19:00</li>
                        <li>Lørdag: 09:00 - 13:00</li>
                        <li>Søndag: Lukket</li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
                <p>
                    &copy; {new Date().getFullYear()} Balance & Motion Fysioterapi. Alle
                    rettigheder forbeholdes.
                </p>
            </div>
        </div>
    </footer>
);