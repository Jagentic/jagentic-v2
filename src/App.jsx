import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import Tickers from './components/Layout/Tickers';
import QuizContainer from './components/Quiz/QuizContainer';
import CuratorDashboard from './components/Curator/CuratorDashboard';
import About from './components/Pages/About';
import bgImage from './assets/bg-tunnel.jpg';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      setIsCuratorMode(window.location.hash === '#curator');
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple hash-based routing
  const renderContent = () => {
    if (isCuratorMode) return <CuratorDashboard />;

    // Check hash for other pages
    const hash = window.location.hash;
    if (hash === '#about') return <About />;
    // Default to Quiz
    return <QuizContainer />;
  };

  if (isCuratorMode) {
    return <CuratorDashboard />;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background text-white selection:bg-accent selection:text-black">

      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/80 z-10" /> {/* Heavy overlay */}
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover opacity-50 animate-bg-motion"
        />
      </div>

      {/* UI Layer */}
      <div className="relative z-10 h-full flex flex-col">
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 flex items-center justify-center px-4 pt-20 pb-32 overflow-y-auto">
          {renderContent()}
        </main>

        <Tickers />
      </div>
    </div>
  );
}

export default App;
