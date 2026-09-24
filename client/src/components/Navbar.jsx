import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(prev => !prev);
    document.body.style.overflow = !mobileNavOpen ? 'hidden' : '';
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">DL</div>
          <div className="nav-logo-text">
            <strong>Dhanlaxmi</strong>
            <span>Est. 2003 · Surat, Gujarat</span>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#calculator">Calculators</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#testimonials">Clients</a></li>
          <li><a href="#contact" className="nav-cta">Get Started →</a></li>
        </ul>
        <button
          className={`hamburger ${mobileNavOpen ? 'active' : ''}`}
          onClick={toggleMobileNav}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`}>
        <a href="#services" onClick={toggleMobileNav}>Services</a>
        <a href="#calculator" onClick={toggleMobileNav}>Calculators</a>
        <a href="#about" onClick={toggleMobileNav}>About</a>
        <a href="#testimonials" onClick={toggleMobileNav}>Client Stories</a>
        <a href="#contact" onClick={toggleMobileNav}>Get Started</a>
      </div>
    </>
  );
}
