import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="logo">Mit.Desai<span>.</span></a>
        
        {/* Mobile Hamburger Toggle */}
        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>projects.js</a></li>
          <li><a href="#research" onClick={() => setIsOpen(false)}>publications.md</a></li>
          <li><a href="#certificates" onClick={() => setIsOpen(false)}>patents_certs.json</a></li>
          <li><a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>contact.sh</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


