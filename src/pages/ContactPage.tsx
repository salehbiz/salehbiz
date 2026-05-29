import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  // Scroll to top on load and load Calendly widget script asynchronously
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Safely check if script is still present in document.body before removing
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="contact-page-container">
      {/* Immersive Video Hero Background */}
      <div className="contact-hero-bg-container">
        <video
          className="contact-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-vignette"></div>
        <div className="contact-hero-bottom-shadow"></div>
        <div className="contact-hero-bottom-blur"></div>
      </div>

      {/* Global Master Navbar */}
      <Navbar activePage="contact" />

      {/* Contact Hero Content */}
      <div className="contact-hero-content">
        <div className="contact-badge-container">
          <span className="contact-badge">Let's Talk</span>
        </div>

        <h1 className="contact-title">
          Have something<br />
          in mind?
        </h1>

        <p className="contact-subtitle">
          The fastest way to start is a short call.<br />
          Pick a time below or reach out directly.
        </p>
      </div>

      {/* Main Section: Two Column Grid */}
      <div className="contact-main-section" style={{ marginTop: '0px' }}>
        <div className="contact-grid">
          
          {/* Left Column: Calendly Embed wrapper */}
          <div className="contact-booking-column">
            <h3 className="column-section-heading">Book a Call</h3>
            <div className="calendly-card-wrapper">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/one-saleh/30min?background_color=0a0a0a&text_color=ffffff&primary_color=ffffff&hide_event_type_details=0&hide_gdpr_banner=1" 
                style={{ minWidth: '320px', width: '100%', height: '780px' }}
              ></div>
            </div>
          </div>

          {/* Right Column: Clickable Contact Links Stack */}
          <div className="contact-links-column">
            <h3 className="column-section-heading">Or reach out directly</h3>
            <div className="contact-links-stack">
              
              {/* Card 1: Email */}
              <a href="mailto:one@saleh.biz" className="contact-link-card">
                <div className="link-card-content">
                  <span className="link-card-label">EMAIL</span>
                  <span className="link-card-value">one@saleh.biz</span>
                </div>
                <svg className="link-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>

              {/* Card 2: LinkedIn */}
              <a href="https://linkedin.com/in/salehbiz" className="contact-link-card" target="_blank" rel="noopener noreferrer">
                <div className="link-card-content">
                  <span className="link-card-label">LINKEDIN</span>
                  <span className="link-card-value">linkedin.com/in/salehbiz</span>
                </div>
                <svg className="link-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>

              {/* Card 3: WhatsApp */}
              <a href="https://wa.me/971500000000" className="contact-link-card" target="_blank" rel="noopener noreferrer">
                <div className="link-card-content">
                  <span className="link-card-label">WHATSAPP</span>
                  <span className="link-card-value">+971 XX XXX XXXX</span>
                </div>
                <svg className="link-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>

              {/* Card 4: Instagram */}
              <a href="https://instagram.com/salehbiz" className="contact-link-card" target="_blank" rel="noopener noreferrer">
                <div className="link-card-content">
                  <span className="link-card-label">INSTAGRAM</span>
                  <span className="link-card-value">@salehbiz</span>
                </div>
                <svg className="link-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Global Master Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-left-col">
              <nav className="footer-nav">
                <a href="/about" className="footer-nav-link">About</a>
                <a href="/project" className="footer-nav-link">Projects</a>
                <a href="/contact" className="footer-nav-link">Contact</a>
              </nav>
              <div className="footer-logo-container">
                <h2 className="footer-logo-text">SALEHBIZ</h2>
              </div>
            </div>

            <div className="footer-right-col">
              <div className="footer-detail-group">
                <h4 className="footer-detail-title">EMAIL</h4>
                <p className="footer-detail-value">
                  <a href="mailto:one@saleh.biz">one@saleh.biz</a>
                </p>
              </div>

              <div className="footer-detail-group">
                <h4 className="footer-detail-title">PHONE</h4>
                <p className="footer-detail-value" style={{ color: '#fff' }}>
                  Available on request
                </p>
              </div>

              <div className="footer-detail-group">
                <h4 className="footer-detail-title">SOCIAL</h4>
                <div className="footer-social-links">
                  <a href="#instagram" className="footer-social-link">Instagram</a>
                  <a href="#linkedin" className="footer-social-link">LinkedIn</a>
                  <a href="#x" className="footer-social-link">X</a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2026 Salehbiz. All rights reserved.
            </div>
            <div className="footer-legal-links">
              <a href="#terms" className="footer-legal-link">Terms & Conditions</a>
              <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
