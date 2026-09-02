import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { useState, useEffect } from 'react';

function App() {
  const [reduceMotion, setReduceMotion] = useState<boolean>(() => {
    const stored = localStorage.getItem('reduceMotion');
    if (stored !== null) {
      return stored === 'true';
    }

    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    return false;
  });

  useEffect(() => {
    localStorage.setItem('reduceMotion', reduceMotion.toString());
  }, [reduceMotion]);

  return (
    <>
      <Navbar reduceMotion={reduceMotion} setReduceMotion={setReduceMotion} />
      <main id="main-content" className={reduceMotion ? 'reduce-motion' : ''}>
        <Landing reduceMotion={reduceMotion} />
      </main>
    </>
  );
}

export default App;
