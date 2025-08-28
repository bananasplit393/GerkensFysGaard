import React from 'react';
import { Button } from '../layout/ui/Button';

const BOOKING_URL = 'https://ezme.io/c/xEF/zGvg';

const BookTidPage: React.FC = () => (
  <section className="bg-white py-16">
    <div className="max-w-xl mx-auto px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Book tid online
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Du kan nemt og hurtigt booke din tid online via vores bookingsystem. Klik på knappen herunder for at komme direkte til booking.
      </p>
      <Button
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 text-lg"
      >
        Book tid
      </Button>
      <div className="mt-10 text-gray-500 text-sm">
        <p>
          Har du spørgsmål eller brug for hjælp til booking? Kontakt os på <a href="mailto:kontakt@holistisksundhedshus.dk" className="text-teal-600 underline">kontakt@holistisksundhedshus.dk</a> eller ring på <a href="tel:+4522222222" className="text-teal-600 underline">22 22 22 22</a>.
        </p>
      </div>
    </div>
  </section>
);

export default BookTidPage;