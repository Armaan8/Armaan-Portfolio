import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import NotFound from './pages/not-found';
import '@fontsource/inter';
import './index.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a0a]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-t-2 border-emerald-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
