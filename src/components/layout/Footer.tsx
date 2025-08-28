
import React from 'react';
import { BtmNavButton } from './ui/BtmNavButton';


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
                                href="/"
                            >
                                Forside
                            </BtmNavButton>
                        </li>
                        <li>
                            <BtmNavButton
                                href="/om-os"
                            >
                                Om Os
                            </BtmNavButton>
                        </li>
                        <li>
                            <BtmNavButton
                                href="/book-tid"
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
                        <li>+45 30 25 68 02</li>
                        <li>kontakt@holistisksundhedshus.dk</li>
                        <li>
                            <a
                                href="https://datacvr.virk.dk/data/visenhed?enhedstype=virksomhed&id=26437474"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-teal-400 transition-colors"
                            >
                                CVR-nr. 26437474
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.google.com/maps/place/P.+S.+Kr%C3%B8yers+Vej+33,+8270+H%C3%B8jbjerg/@56.1226049,10.1966173,17z/data=!3m1!4b1!4m6!3m5!1s0x464c4068c3c54623:0x5574e93a143ce38d!8m2!3d56.1226019!4d10.1991922!16s%2Fg%2F11pv3gflqy?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-teal-400 transition-colors"
                            >
                                P.S Krøyers vej 33, 8270 Højbjerg
                            </a>
                        </li>
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