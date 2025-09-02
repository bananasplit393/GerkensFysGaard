import React from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';
import Router from './router/Router';
import logoBg from '../assets/img/Logo.jpg';

const appBgStyle = {
  backgroundImage: `url(${logoBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
};

const App: React.FC = () => {
  return (
    <div className="font-sans" style={appBgStyle}>
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
