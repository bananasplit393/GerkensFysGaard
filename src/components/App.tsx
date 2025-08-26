import { HomePage } from './pages/HomePage';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 font-sans">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
