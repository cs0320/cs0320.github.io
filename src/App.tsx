import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
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
      <Landing animationEnabled={animationEnabled} />
    </>
  );
}

export default App;
