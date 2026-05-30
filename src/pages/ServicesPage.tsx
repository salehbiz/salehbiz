import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import RevealText from '../components/RevealText';
import Navbar from '../components/Navbar';
import './HomePage.css';
import './ServicesPage.css';

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const [orbitTilt, setOrbitTilt] = useState({ x: 0, y: 0 });
  const orbitContainerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const handleOrbitMouseMove = (e: React.MouseEvent) => {
    if (!orbitContainerRef.current) return;
    const rect = orbitContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setOrbitTilt({
      x: -(y / rect.height) * 15,
      y: (x / rect.width) * 15
    });
  };

  const handleOrbitMouseLeave = () => {
    setOrbitTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const hwwObserverOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: 0.2
    };

    const hwwObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('focused-card');
        } else {
          entry.target.classList.remove('focused-card');
        }
      });
    }, hwwObserverOptions);

    const hwwCards = document.querySelectorAll('.hww-card');
    hwwCards.forEach((card) => hwwObserver.observe(card));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      hwwObserver.disconnect();
    };
  }, []);

  const differentiators = [
    { title: 'One price agreed upfront', desc: 'No retainers, no scope creep, no chasing for updates.' },
    { title: 'Prototype before you commit', desc: 'You see a working version in three days before the real build begins.' },
    { title: 'Regular video updates', desc: 'You never have to ask for progress. I send it before you think to ask.' },
    { title: 'Full ownership at handover', desc: 'The site, the files, the access. Everything is yours when we finish.' }
  ];

  return (
    <div className="services-page-container">
      
      {/* ─── Hero Section with Organic Background Gradient ─── */}
      <div className="services-hero-bg" style={{ backgroundImage: "url('/assets/images/1MsDy3g9BqY7FoTXe3Gv7pkwx8.png')" }}>
        <div className="services-hero-overlay"></div>

        {/* Navbar */}
        <Navbar activePage="services" />

        {/* Hero Content */}
        <section className="services-hero-section">
          <div className="services-badge">Services</div>
          <h1 className="services-hero-title">
            <RevealText text={"Built for consultants who\nhave outgrown what they\nhave online."} delayOffset={0} />
          </h1>
          <p className="services-hero-subtitle">
            <RevealText text={"Custom websites, brand systems, and operational tools.\nOne builder, one price agreed upfront, no surprises."} delayOffset={0.4} />
          </p>
        </section>
      </div>

      {/* ─── Services Section (Copied exactly from HomePage.tsx) ─── */}
      <section className="services-master-section">
        <div className="services-header">
          <div className="services-pill">What I Do</div>
          <h2 className="services-title">Built for senior consultants and advisors.</h2>
          <p className="services-subtitle">
            Most clients start with a website. Many come back for what comes next.
          </p>
        </div>

        <div className="services-grid-container">
          {/* Card 1: Websites */}
          <div className="service-card scroll-reveal">
            <div className="service-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <h3 className="service-card-title">Websites</h3>
            <p className="service-card-desc">Done for you websites for consultants and advisors who have outgrown a LinkedIn only presence.</p>
          </div>

          {/* Card 2: Brand Identity */}
          <div className="service-card scroll-reveal">
            <div className="service-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3 className="service-card-title">Brand Identity</h3>
            <p className="service-card-desc">Logo, colors, typography, and a visual system that reads as senior, not startup.</p>
          </div>

          {/* Card 3: E-Commerce */}
          <div className="service-card scroll-reveal">
            <div className="service-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 className="service-card-title">E-Commerce</h3>
            <p className="service-card-desc">For consultants turning their expertise into products. Courses, books, advisory packages. Built to sell while you sleep.</p>
          </div>

          {/* Card 4: AI Agents */}
          <div className="service-card scroll-reveal">
            <div className="service-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
            </div>
            <h3 className="service-card-title">AI Agents</h3>
            <p className="service-card-desc">Custom AI that handles your inbound, qualifies leads, and replies on your behalf, so your inbox stops being a second job.</p>
          </div>

          {/* Card 5: CRM & Automations */}
          <div className="service-card scroll-reveal">
            <div className="service-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
            </div>
            <h3 className="service-card-title">CRM & Automations</h3>
            <p className="service-card-desc">A simple, custom CRM for advisors who have outgrown spreadsheets but do not need Salesforce. No monthly seat fees.</p>
          </div>

          {/* Card 6: Full Systems Build */}
          <div className="service-card scroll-reveal">
            <div className="service-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            </div>
            <h3 className="service-card-title">Full Systems Build</h3>
            <p className="service-card-desc">Website, CRM, AI, and automations connected into one system that runs your inbound, follow ups, and delivery in the background.</p>
          </div>
        </div>
      </section>

      {/* ─── How We Work Section (Copied exactly from HomePage.tsx) ─── */}
      <section className="hww-section">
        <div className="hww-container">
          
          <div className="hww-left">
            <div className="hww-header">
              <div className="hww-pill">How It Works</div>
              <h2 className="hww-title">A simple process.<br />Serious results.</h2>
              <p className="hww-subtitle">
                Prototype in three days. <br />
                Site live in seven to fourteen.
              </p>
            </div>
            
            <div className="hww-cards-list">
              {/* Card 1: Discover */}
              <div className="hww-card scroll-reveal">
                <div className="hww-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <div className="hww-card-content">
                  <h3>Discover</h3>
                  <div className="hww-card-divider"></div>
                  <p>We start with one call. I learn your business, <br />your buyer, and what the site needs to do for you. <br />No pressure, no package walkthrough.</p>
                </div>
              </div>

              {/* Card 2: Prototype */}
              <div className="hww-card scroll-reveal">
                <div className="hww-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <div className="hww-card-content">
                  <h3>Prototype</h3>
                  <div className="hww-card-divider"></div>
                  <p>Within three days you get a working prototype. <br />You see the design, the flow, and the direction <br />before I touch the real build.</p>
                </div>
              </div>

              {/* Card 3: Build */}
              <div className="hww-card scroll-reveal">
                <div className="hww-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 12 12 17 22 12"></polyline>
                    <polyline points="2 17 12 22 22 17"></polyline>
                  </svg>
                </div>
                <div className="hww-card-content">
                  <h3>Build</h3>
                  <div className="hww-card-divider"></div>
                  <p>Once you approve the prototype, I build the full site. <br />You get regular video updates as it comes together, <br />so you always know where things are without chasing me.</p>
                </div>
              </div>

              {/* Card 4: Review and Launch */}
              <div className="hww-card scale-card scroll-reveal" style={{ 
                backgroundImage: "url('/assets/images/Zk98K7iTo5ArC18iekSAcKmHTQ.png')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundColor: 'transparent',
                border: 'none'
              }}>
                <div className="hww-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <div className="hww-card-content">
                  <h3>Review and Launch</h3>
                  <div className="hww-card-divider" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                  <p style={{ color: 'rgba(255,255,255,0.9)' }}>We run a few review rounds together so you can <br />shape the site until it feels right. Once you sign off, <br />your site goes live and everything is yours.</p>
                  
                  <div className="hww-button-wrapper">
                    <a href="/contact" className="hww-book-btn">Book a Call</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hww-right">
            <div 
              className="processing-core-system" 
              ref={orbitContainerRef}
              onMouseMove={handleOrbitMouseMove}
              onMouseLeave={handleOrbitMouseLeave}
            >
              <div 
                className="processing-scene" 
                style={{ transform: `rotateX(${orbitTilt.y * 0.5}deg) rotateY(${orbitTilt.x * -0.5}deg)` }}
              >
                {/* Data Flow Overlay */}
                <div className="data-flow-container">
                  <svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" className="data-svg">
                    <defs>
                      <linearGradient id="flow-in-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(254, 119, 1, 0)" />
                        <stop offset="100%" stopColor="rgba(254, 119, 1, 0.8)" />
                      </linearGradient>
                      <linearGradient id="flow-out-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(254, 119, 1, 0.8)" />
                        <stop offset="100%" stopColor="rgba(254, 119, 1, 0)" />
                      </linearGradient>
                    </defs>

                    {/* Chaos In */}
                    <g className="data-lines-in">
                      <path className="ambient-path" d="M 0 150 C 200 150, 300 350, 360 400" />
                      <path className="ambient-path" d="M 0 400 C 150 400, 250 400, 340 400" />
                      <path className="ambient-path" d="M 0 650 C 200 650, 300 450, 360 400" />
                      <path className="ambient-path" d="M 100 50 C 250 150, 350 300, 380 380" />
                      <path className="ambient-path" d="M 100 750 C 250 650, 350 500, 380 420" />

                      <path className="pulse-in pi1" d="M 0 150 C 200 150, 300 350, 360 400" stroke="url(#flow-in-grad)" />
                      <path className="pulse-in pi2" d="M 0 400 C 150 400, 250 400, 340 400" stroke="url(#flow-in-grad)" />
                      <path className="pulse-in pi3" d="M 0 650 C 200 650, 300 450, 360 400" stroke="url(#flow-in-grad)" />
                      <path className="pulse-in pi4" d="M 100 50 C 250 150, 350 300, 380 380" stroke="url(#flow-in-grad)" />
                      <path className="pulse-in pi5" d="M 100 750 C 250 650, 350 500, 380 420" stroke="url(#flow-in-grad)" />
                    </g>

                    {/* Structure Out */}
                    <g className="data-lines-out">
                      <path className="ambient-path" d="M 440 360 L 800 360" />
                      <path className="ambient-path" d="M 460 380 L 800 380" />
                      <path className="ambient-path" d="M 470 400 L 800 400" />
                      <path className="ambient-path" d="M 460 420 L 800 420" />
                      <path className="ambient-path" d="M 440 440 L 800 440" />

                      <path className="pulse-out po1" d="M 440 360 L 800 360" stroke="url(#flow-out-grad)" />
                      <path className="pulse-out po2" d="M 460 380 L 800 380" stroke="url(#flow-out-grad)" />
                      <path className="pulse-out po3" d="M 470 400 L 800 400" stroke="url(#flow-out-grad)" />
                      <path className="pulse-out po4" d="M 460 420 L 800 420" stroke="url(#flow-out-grad)" />
                      <path className="pulse-out po5" d="M 440 440 L 800 440" stroke="url(#flow-out-grad)" />
                    </g>

                    {/* Scroll-Responsive Solid Orbit Lines */}
                    <g className="scroll-particles" style={{ 
                      transform: `rotate(${scrollY * 0.15}deg)`, 
                      transformOrigin: '400px 400px',
                      transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}>
                      {/* Inner Orbits */}
                      <circle cx="400" cy="400" r="200" stroke="rgba(255, 170, 0, 0.5)" strokeWidth="2" fill="none" filter="drop-shadow(0 0 12px #ffaa00)" />
                      <circle cx="400" cy="400" r="260" stroke="rgba(254, 119, 1, 0.4)" strokeWidth="1" fill="none" filter="drop-shadow(0 0 8px #fe7701)" />
                    </g>
                    
                    {/* Scroll-Responsive Outer Glow Lines */}
                    <g style={{ 
                      transform: `scale(${1 + scrollY * 0.0004}) rotate(${scrollY * -0.05}deg)`, 
                      transformOrigin: '400px 400px', 
                      opacity: Math.max(0.2, 1 - scrollY * 0.0008),
                      transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease'
                    }}>
                      <circle cx="400" cy="400" r="280" stroke="rgba(255, 170, 0, 0.6)" strokeWidth="3" fill="none" filter="drop-shadow(0 0 15px rgba(255, 170, 0, 0.9))" />
                      <circle cx="400" cy="400" r="340" stroke="rgba(254, 119, 1, 0.5)" strokeWidth="4" fill="none" filter="drop-shadow(0 0 20px rgba(254, 119, 1, 0.8))" />
                      <circle cx="400" cy="400" r="220" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" fill="none" filter="drop-shadow(0 0 12px rgba(255, 255, 255, 0.7))" />
                    </g>
                  </svg>
                </div>

                {/* Central Processing Core */}
                <div className="core-system">
                  <div className="orbit-ring ring-1">
                    <div className="ring-energy re-1"></div>
                  </div>
                  <div className="orbit-ring ring-2">
                    <div className="ring-energy re-2"></div>
                  </div>
                  
                  <div className="core-halo"></div>
                  <div className="core-orb"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Differentiators Section ─── */}
      <section className="services-detail-section differentiators-section">
        <div className="diff-badge">Why Salehbiz</div>
        <h2 className="diff-heading">One builder. One project at a time. No surprises.</h2>

        <div className="differentiators-grid">
          {differentiators.map((diff, index) => (
            <div key={index} className="diff-card">
              <div className="diff-card-glow"></div>
              <h3 className="diff-card-title">{diff.title}</h3>
              <div className="diff-card-divider"></div>
              <p className="diff-card-desc">{diff.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Final CTA Section ─── */}
      <section className="services-cta-section">
        <div className="services-cta-card" style={{ 
          backgroundImage: "url('/assets/images/Zk98K7iTo5ArC18iekSAcKmHTQ.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundColor: 'transparent'
        }}>
          <h2 className="services-cta-title">
            Ready to finally have a site<br />
            that matches your career?
          </h2>
          <div className="services-cta-button-wrapper">
            <button onClick={() => navigate('/contact')} className="services-cta-btn">Book a Call</button>
            <p className="services-cta-microcopy">A 20 minute call. No pitch. Just clarity.</p>
          </div>
        </div>
      </section>

      {/* ─── Global Footer ─── */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-left-col">
              <nav className="footer-nav">
                <a href="/about" className="footer-nav-link">About</a>
                <a href="/services" className="footer-nav-link active">Services</a>
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

export default ServicesPage;
