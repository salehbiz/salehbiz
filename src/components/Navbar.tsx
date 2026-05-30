import React, { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
  activePage?: 'home' | 'about' | 'services' | 'projects' | 'contact' | 'blog';
}

const Navbar: React.FC<NavbarProps> = ({ activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check scroll position immediately on mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar">
        <a href="/" className="logo">SALEHBIZ</a>
        
        <div className="navCenter">
          <a href="/about" className={activePage === 'about' ? 'active' : ''}>About</a>
          <a href="/services" className={activePage === 'services' ? 'active' : ''}>Services</a>
          <a href="/project" className={activePage === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#blog" className={activePage === 'blog' ? 'active' : ''}>Blog</a>
          <a href="/contact" className={activePage === 'contact' ? 'active' : ''}>Contact</a>
        </div>
        
        <div className="navRightMobileWrapper">
          <a href="/contact" className="navRight">Book a Call</a>
          
          <button 
            className="mobileMenuToggle" 
            onClick={toggleMenu} 
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line line-1"></span>
            <span className="hamburger-line line-2"></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Drawer Dropdown */}
      <div className={`mobileDrawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobileDrawerContent">
          <a href="/about" className={`mobileNavLink ${activePage === 'about' ? 'active' : ''}`}>About</a>
          <a href="/services" className={`mobileNavLink ${activePage === 'services' ? 'active' : ''}`}>Services</a>
          <a href="/project" className={`mobileNavLink ${activePage === 'projects' ? 'active' : ''}`}>Projects</a>
          <a href="#blog" className={`mobileNavLink ${activePage === 'blog' ? 'active' : ''}`}>Blog</a>
          <a href="/contact" className={`mobileNavLink ${activePage === 'contact' ? 'active' : ''}`}>Contact</a>
          <a href="/contact" className="mobileMenuCTA">Book a Call</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
