import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhyUs from './pages/WhyUs';
import Corridors from './pages/Corridors';
import Framework from './pages/Framework';
import Insights from './pages/Insights';
import Consultation from './pages/Consultation';
import NotFound from './pages/NotFound';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/foundation" element={<Corridors />} />
        <Route path="/framework" element={<Framework />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/corridors" element={<corridors />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;