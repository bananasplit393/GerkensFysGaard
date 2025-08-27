import React from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';
import Router from './router/Router';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 font-sans">
      <Header />
      <main>
        <Navbar />
        <Router />
      </main>
      <Footer />
    </div>
  );
};

export default App;
