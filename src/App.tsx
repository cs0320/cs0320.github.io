import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { useState, useEffect } from 'react';

function App() {
  const [animationEnabled, setAnimationEnabled] = useState(() => {
    const stored = localStorage.getItem('animationEnabled');
    return stored === null ? true : stored === 'true';
  });

  useEffect(() => {
    localStorage.setItem('animationEnabled', animationEnabled.toString());
  }, [animationEnabled]);

  return (
    <>
      <Navbar animationEnabled={animationEnabled} setAnimationEnabled={setAnimationEnabled} />
      <main id="main-content">
        <Landing animationEnabled={animationEnabled} />
      </main>
    </>
  );
}

export default App;
