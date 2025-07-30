import React from 'react';

// Assuming your Button component is located here
import { Button } from '../Interacting/Button';

export const About: React.FC = () => (
  <section className="py-16 sm:py-20 bg-slate-50">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="w-full">
          <img
            src="https://placehold.co/800x600/E0F2F1/0F766E?text=Patient-Centered+Care"
            alt="Physiotherapist consulting with a patient"
            className="rounded-lg shadow-2xl w-full h-auto"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Approach to Your Health</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Balance & Motion, your well-being is our highest priority. We believe in a holistic approach, combining
            evidence-based techniques with personalized care to address the root cause of your discomfort, not just the
            symptoms.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our dedicated therapists work with you to create a tailored treatment plan that aligns with your goals,
            empowering you to take an active role in your recovery and long-term health.
          </p>
          <Button>Meet Our Team</Button>
        </div>
      </div>
    </div>
  </section>
);
