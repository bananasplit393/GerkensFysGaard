import React from 'react';
import { Button } from '../../layout/ui/Button';

import OM_OS_TO from "../../../assets/Geekens/OmOsTo.jpeg"; 


const OmOsPage = () => {
  return (
  <section className="py-16 sm:py-20 bg-slate-50">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="w-full">
          <img
            src= { OM_OS_TO }
            alt="Physiotherapist consulting with a patient"
            className="rounded-lg shadow-2xl w-full h-auto"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Måske, påske er du den næste af vores kyllinger, vi hælper sikkeret videre</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Balance & Motion, your well-being is our highest priority. We believe in a holistic approach, combining
            evidence-based techniques with personalized care to address the root cause of your discomfort, not just the
            symptoms.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our dedicated therapists work with you to create a tailored treatment plan that aligns with your goals,
            empowering you to take an active role in your recovery and long-term health.
          </p>
          <div className="flex flex-row items-center justify-center space-x-6">
            <Button href="/alexander">Meet Alex</Button>
            <Button href="https://holistisksundhedshus.dk/">Meet Louise</Button>
          </div>

        </div>
      </div>
    </div>
  </section>
  ); 
};

export default OmOsPage;