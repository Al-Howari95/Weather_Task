import React from 'react';
import Button from './components/Button.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Weather from './components/Weather.jsx';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Weather />
      <Button />
      <Footer />
    </div>
  );
};

export default App;