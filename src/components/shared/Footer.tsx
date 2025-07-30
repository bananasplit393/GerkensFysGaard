import React from 'react';

export const Footer: React.FC = () => (
	<footer className="bg-gray-800 text-gray-300 py-12">
		<div className="container mx-auto px-4">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
				{/* Column 1: Brand */}
				<div>
					<h3 className="text-xl font-bold text-white mb-4">
						Balance & Motion
					</h3>
					<p className="text-sm">Your partners in health and recovery.</p>
				</div>

				{/* Column 2: Navigate */}
				<div>
					<h4 className="font-semibold text-lg text-white mb-4">Navigate</h4>
					<ul className="space-y-2">
						<li>
							<a
								href="#"
								className="hover:text-white transition-colors duration-300"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-white transition-colors duration-300"
							>
								Services
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-white transition-colors duration-300"
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-white transition-colors duration-300"
							>
								Book Online
							</a>
						</li>
					</ul>
				</div>

				{/* Column 3: Contact */}
				<div>
					<h4 className="font-semibold text-lg text-white mb-4">Contact Us</h4>
					<ul className="space-y-2">
						<li>123 Wellness Ave, Healthville</li>
						<li>(123) 555-0123</li>
						<li>contact@balanceandmotion.com</li>
					</ul>
				</div>

				{/* Column 4: Hours */}
				<div>
					<h4 className="font-semibold text-lg text-white mb-4">
						Clinic Hours
					</h4>
					<ul className="space-y-2">
						<li>Mon - Fri: 8am - 7pm</li>
						<li>Saturday: 9am - 1pm</li>
						<li>Sunday: Closed</li>
					</ul>
				</div>
			</div>
			<div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
				<p>
					&copy; {new Date().getFullYear()} Balance & Motion Physiotherapy. All
					Rights Reserved.
				</p>
			</div>
		</div>
	</footer>
);
