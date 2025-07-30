import React from 'react';

// Assuming your Button component is also using Tailwind CSS
import { Button } from '../Interacting/Button';

// --- TYPE DEFINITIONS ---
// It's good practice to define the shape of your data
interface Service {
  name: string;
  description: string;
  image: string;
}

interface ServiceCardProps {
  service: Service;
}

// --- MOCK DATA ---
// In a real app, this would come from a CMS or API
const services: Service[] = [
  {
    name: 'Manual Therapy',
    description: 'Hands-on techniques to decrease pain and improve your range of motion.',
    image: 'https://placehold.co/600x400/16A3A1/FFFFFF?text=Manual+Therapy',
  },
  {
    name: 'Sports Injury Rehab',
    description: 'Customized programs to get you back in the game safely and stronger than before.',
    image: 'https://placehold.co/600x400/0D9488/FFFFFF?text=Sports+Rehab',
  },
  {
    name: 'Post-Surgical Recovery',
    description: 'Guided rehabilitation to restore function and mobility after your operation.',
    image: 'https://placehold.co/600x400/0F766E/FFFFFF?text=Post-Surgical',
  },
];

// --- CHILD COMPONENT: ServiceCard ---
// This component is used by the main ServicesSection
const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
      <a href="#" className="inline-block mt-4 text-teal-600 font-semibold hover:text-teal-700">
        Learn More &rarr;
      </a>
    </div>
  </div>
);

// --- MAIN COMPONENT: ServicesSection ---
// Renamed from 'Service' to be more descriptive
export const ServicesSection: React.FC = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Our Specialized Services</h2>
        <p className="text-gray-600 mt-2">Expert care for a wide range of conditions.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button>View All Services</Button>
      </div>
    </div>
  </section>
);
