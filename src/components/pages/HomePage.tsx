
import React from 'react';
import { Button } from '../layout/ui/Button';
import logoBg from '../../assets/img/Logo.jpg';

export const Homepage: React.FC = () => {
  // For background images with Tailwind, it's common to set them in your CSS
  // or configure them in tailwind.config.js. For simplicity here, we use an inline style.
  const heroStyle = {
    backgroundImage: `url(${logoBg})`,
  };

  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style={heroStyle}
    >
      {/* This div creates the dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* This div holds the content and places it above the overlay */}
  <div className="absolute z-10 p-6">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
        >
          Rediscover Pain-Free Movement
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Personalized physiotherapy to help you achieve your health and wellness goals.
        </p>
        {/* The Button component now contains its own base styles */}
        <Button href="https://ezme.io/c/xEF/zGvg">
          Bestil Tid Online
        </Button>
      </div>
    </section>
  );
};
