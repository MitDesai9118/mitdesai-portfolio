import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <ul className="nav-links">
          <li><a href="#projects">projects.js</a></li>
          <li><a href="#research">publications.md</a></li>
          <li><a href="#certificates">patents_certs.json</a></li>
          <li><a href="#contact" className="btn btn-primary">contact.sh</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


