import React from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';
import { Homepage } from './pages/Homepage';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 font-sans">
      <Header />
      <main>
        <Navbar />
        <Homepage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
