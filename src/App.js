
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery/:id" element={<Gallery />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Resume" element={<Resume/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
