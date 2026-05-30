import React, { useEffect, useState, useRef } from 'react';
import HomeHero from '../components/HomeHero';
import { injectSchema } from '../utils/schema';
import './HomePage.css';

const HomePage: React.FC = () => {
  // Inject JSON-LD Organization and FAQPage schemas for SEO/GEO
  useEffect(() => {
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Salehbiz",
      "url": "https://saleh.biz",
      "description": "Custom websites, brand systems, and automations for senior consultants and advisors in the UAE and beyond.",
      "founder": {
        "@type": "Person",
        "name": "Saleh"
      },
      "areaServed": ["UAE", "United Kingdom", "United States", "Europe"],
      "serviceType": ["Web Design", "Brand Identity", "AI Agents", "CRM & Automations"]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "I have been burned by developers before. How is this different?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fair question, and the reason most of my clients come to me in the first place. Fixed timeline, fixed price, one prototype, a few review rounds, all written down on day one. No retainers. No scope creep. No chasing for updates."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a project take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A working prototype within three days. Site live in seven to fourteen days after you approve it. Larger projects with automations or AI take a few weeks more."
          }
        },
        {
          "@type": "Question",
          "name": "How much does it cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every project is different, so every quote is different. I work with a range of budgets and shape the scope around what you actually need. We figure out the right fit on the call, and you get a flat number before anything begins."
          }
        },
        {
          "@type": "Question",
          "name": "I am not technical. How much of my time will this take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Around 60 minutes across a couple of calls, plus your time in the review rounds. I handle the writing, design, build, hosting, and setup. You approve. That is it."
          }
        },
        {
          "@type": "Question",
          "name": "I already have a website. It is just old. Can you redo it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Most clients come for exactly this. I rebuild from scratch so the site reflects where you are in your career today, not where you were a decade ago."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with clients outside the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Most of my work is remote. I work with consultants and advisors across the UAE, UK, US, and Europe."
          }
        }
      ]
    };

    const cleanupOrg = injectSchema('schema-organization', orgSchema);
    const cleanupFaq = injectSchema('schema-faq', faqSchema);

    return () => {
      cleanupOrg();
      cleanupFaq();
    };
  }, []);
  const [orbitTilt, setOrbitTilt] = useState({ x: 0, y: 0 });
  const orbitContainerRef = useRef<HTMLDivElement>(null);

  const [scrollY, setScrollY] = useState(0);
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({});

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const hwwObserverOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px', // Wider focus zone so the first card is captured
      threshold: 0.2 // Only requires 20% of the card to be visible to focus
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

  return (
    <div className="elevon-page">
      <HomeHero />

      {/* About Master Section */}
      <section className="section about-master-section">
        <div className="liquid-bubble"></div>
        <div className="about-header">
          <div className="about-pill">About</div>
          <h2 className="about-title">The website<br />your career deserves.</h2>
          <p className="about-subtitle">
            You've spent years building a reputation. Your network knows it. <br />The internet has no idea.
          </p>
        </div>

        <div className="about-cards-grid">
          {/* Card 1: Unclear Direction */}
          <div className="about-card card-3d scroll-reveal">
            <div className="card-icon-container">
              <div className="icon-3d direction-3d">
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                  <style>
                    {`
                      .net-node {
                        animation: net-pulse 3s infinite alternate ease-in-out;
                      }
                      .net-line {
                        stroke-dasharray: 4 4;
                        animation: net-flow 10s linear infinite;
                      }
                      .net-outer {
                        transform-origin: 80px 80px;
                        animation: net-breathe 4s infinite alternate ease-in-out;
                      }
                      @keyframes net-pulse {
                        0% { opacity: 0.6; transform: scale(0.9); }
                        100% { opacity: 1; transform: scale(1.1); }
                      }
                      @keyframes net-flow {
                        to { stroke-dashoffset: -40; }
                      }
                      @keyframes net-breathe {
                        0% { transform: scale(0.85); }
                        100% { transform: scale(1.15); }
                      }
                    `}
                  </style>
                  <g className="network-icon" style={{ transformOrigin: '80px 80px', animation: 'float-panes 6s ease-in-out infinite alternate' }}>
                    <g className="net-outer">
                      <path d="M80 80 L30 40 M80 80 L100 20 M80 80 L140 60 M80 80 L120 130 M80 80 L60 140 M80 80 L20 100" stroke="rgba(254, 119, 1, 0.4)" strokeWidth="1.5" className="net-line" />
                      <path d="M30 40 L100 20 L140 60 L120 130 L60 140 L20 100 Z" stroke="rgba(254, 119, 1, 0.2)" strokeWidth="1" className="net-line" />
                      
                      <circle cx="30" cy="40" r="5" fill="#fe7701" filter="drop-shadow(0 0 6px #fe7701)" className="net-node" style={{ transformOrigin: '30px 40px', animationDelay: '0s' }} />
                      <circle cx="100" cy="20" r="4" fill="#fe7701" filter="drop-shadow(0 0 6px #fe7701)" className="net-node" style={{ transformOrigin: '100px 20px', animationDelay: '0.2s' }} />
                      <circle cx="140" cy="60" r="6" fill="#fe7701" filter="drop-shadow(0 0 6px #fe7701)" className="net-node" style={{ transformOrigin: '140px 60px', animationDelay: '0.4s' }} />
                      <circle cx="120" cy="130" r="4" fill="#fe7701" filter="drop-shadow(0 0 6px #fe7701)" className="net-node" style={{ transformOrigin: '120px 130px', animationDelay: '0.6s' }} />
                      <circle cx="60" cy="140" r="5" fill="#fe7701" filter="drop-shadow(0 0 6px #fe7701)" className="net-node" style={{ transformOrigin: '60px 140px', animationDelay: '0.8s' }} />
                      <circle cx="20" cy="100" r="6" fill="#fe7701" filter="drop-shadow(0 0 6px #fe7701)" className="net-node" style={{ transformOrigin: '20px 100px', animationDelay: '1s' }} />
                    </g>
                    <circle cx="80" cy="80" r="10" fill="#fe7701" filter="drop-shadow(0 0 12px #fe7701)" className="net-node" style={{ transformOrigin: '80px 80px' }} />
                  </g>
                </svg>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-new-heading">The problem</h3>
              <p>Every serious prospect searches your name. An outdated site quietly costs you the deal before you can even hear back.</p>
            </div>
          </div>

          {/* Card 2: Systems */}
          <div className="about-card card-3d highlighted middle-card-bg scroll-reveal" style={{ 
            backgroundImage: "url('/assets/images/middle-bg.png')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundColor: 'transparent' 
          }}>
            <div className="card-icon-container">
              <div className="icon-3d systems-3d">
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                  <style>
                    {`
                      .stack-layer {
                        transition: transform 0.5s ease;
                      }
                      .layer-1 { animation: stack-straight-1 4s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate; }
                      .layer-2 { animation: stack-straight-2 4s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate; }
                      .layer-3 { animation: stack-straight-3 4s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate; }
                      .layer-4 { animation: stack-straight-4 4s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate; }
                      
                      @keyframes stack-straight-1 {
                        0%, 20% { transform: translateY(80px); }
                        80%, 100% { transform: translateY(35px); }
                      }
                      @keyframes stack-straight-2 {
                        0%, 20% { transform: translateY(80px); }
                        80%, 100% { transform: translateY(65px); }
                      }
                      @keyframes stack-straight-3 {
                        0%, 20% { transform: translateY(80px); }
                        80%, 100% { transform: translateY(95px); }
                      }
                      @keyframes stack-straight-4 {
                        0%, 20% { transform: translateY(80px); }
                        80%, 100% { transform: translateY(125px); }
                      }
                    `}
                  </style>
                  <g className="stack-icon" style={{ transformOrigin: '80px 80px', animation: 'float-panes 6s ease-in-out infinite alternate' }}>
                    {/* Bottom Layer - Brightest */}
                    <g className="stack-layer layer-4">
                      <rect x="30" y="-12" width="100" height="24" rx="6" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="2" fill="rgba(255, 255, 255, 0.15)" filter="drop-shadow(0 0 12px rgba(255, 255, 255, 0.6))" />
                    </g>
                    {/* Third Layer */}
                    <g className="stack-layer layer-3">
                      <rect x="30" y="-12" width="100" height="24" rx="6" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" fill="rgba(255, 255, 255, 0.1)" filter="drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))" />
                    </g>
                    {/* Second Layer */}
                    <g className="stack-layer layer-2">
                      <rect x="30" y="-12" width="100" height="24" rx="6" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" fill="rgba(255, 255, 255, 0.05)" />
                    </g>
                    {/* Top Layer */}
                    <g className="stack-layer layer-1">
                      <rect x="30" y="-12" width="100" height="24" rx="6" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" fill="rgba(255, 255, 255, 0.02)" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-new-heading">The approach</h3>
              <p>I learn your positioning, your buyer, and your career. Then I build a site that closes the way you close in the room.</p>
            </div>
          </div>

          {/* Card 3: Growth */}
          <div className="about-card card-3d scroll-reveal">
            <div className="card-icon-container">
              <div className="icon-3d growth-3d">
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
                  <defs>
                    <radialGradient id="sphere-grad" cx="40%" cy="40%" r="50%">
                      <stop offset="0%" stopColor="#fff" />
                      <stop offset="60%" stopColor="#333" />
                      <stop offset="100%" stopColor="#000" />
                    </radialGradient>
                  </defs>
                  <circle cx="80" cy="80" r="30" fill="url(#sphere-grad)" className="sphere" />
                  <ellipse cx="80" cy="80" rx="60" ry="20" stroke="rgba(254, 119, 1, 0.3)" strokeWidth="2" className="orbit-3d-1" />
                  <ellipse cx="80" cy="80" rx="20" ry="60" stroke="rgba(254, 119, 1, 0.3)" strokeWidth="2" className="orbit-3d-2" />
                  <circle cx="140" cy="80" r="4" fill="#fe7701" className="orbit-node-3d" />
                </svg>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-new-heading">The outcome</h3>
              <p>A site that matches your résumé. Inbound that turns into real clients. The confidence to raise your rates.</p>
            </div>
          </div>
        </div>

        <div className="about-footer-line">
          <div className="shield-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fe7701" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <p>Built for the consultants and advisors the internet has been underselling.</p>
        </div>
        <div className="about-bottom-overlay"></div>
      </section>

      {/* How We Work Section */}
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

      {/* Selected Work / Portfolio Section */}
      <section className="section portfolio-section">


        <div className="portfolio-header">
          <h2 className="about-title">Recent work.</h2>
          <p className="about-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            A small, deliberate body of work. Every project taken personally.
          </p>
        </div>

        <div className="portfolio-carousel-wrapper">
          <div className="portfolio-carousel-track">
            {[
              { img: "/assets/images/portfolio-7.png", title: "Marabi" },
              { img: "/assets/images/portfolio-4.png", title: "World Business Hub" },
              { img: "/assets/images/portfolio-1.png", title: "Usman Zafar" },
              { img: "/assets/images/portfolio-raco-2.png", title: "Raco" },
              { img: "/assets/images/portfolio-7.png", title: "Marabi" },
              { img: "/assets/images/portfolio-4.png", title: "World Business Hub" },
              { img: "/assets/images/portfolio-1.png", title: "Usman Zafar" },
              { img: "/assets/images/portfolio-raco-2.png", title: "Raco" }
            ].map((item, index) => (
              <div className="simple-portfolio-card carousel-card" key={index}>
                <div className="simple-portfolio-img-wrapper">
                  <img src={item.img} alt={item.title} className="simple-portfolio-img" loading="lazy" />
                  <div className="simple-portfolio-overlay"></div>
                  <div className="simple-portfolio-bar-overlay">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-blur-left"></div>
          <div className="carousel-blur-right"></div>
        </div>
        <a href="/project" className="portfolio-view-all-btn" style={{ textDecoration: 'none', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
          View all projects
        </a>
      </section>

      {/* Services Section */}
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

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <div className="testimonials-pill">Selected feedback</div>
            <h2 className="testimonials-title">What clients say<br />after launch.</h2>
            <p className="testimonials-subtitle">A small body of work means a small set of stories. Every one of them mattered.</p>
          </div>

          <div className="testimonials-rows-container">
            <div className="testimonials-row">
              {/* Card 1: Standard Card */}
              <div className="testimonial-card standard-card scroll-reveal">
                <div className="testimonial-stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="testimonial-quote">"Refined our brand & increased inbound leads by 70% in just a few months."</p>
                <div className="testimonial-footer">
                  <img className="testimonial-avatar" src="/assets/images/sarah-ahmed.png" alt="Sarah Ahmed" loading="lazy" />
                  <div className="testimonial-meta">
                    <h4 className="testimonial-name">Sarah Ahmed</h4>
                    <span className="testimonial-title">MD, BrightLabs</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Highlighted Featured Card (Image Based) */}
              <div className="testimonial-card highlighted-card featured-top-card scroll-reveal" style={{ backgroundImage: "url('/assets/images/Zk98K7iTo5ArC18iekSAcKmHTQ.png')" }}>
                <div className="highlighted-card-content">
                  <div className="testimonial-stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <p className="testimonial-quote">"Saleh understood our vision and built a site that drove real growth."</p>
                  <div className="testimonial-featured-footer">
                    <span className="featured-name">Daniel Foster</span>
                    <span className="featured-dot">•</span>
                    <span className="featured-title">Founder, ScaleForge</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Standard Card */}
              <div className="testimonial-card standard-card scroll-reveal">
                <div className="testimonial-stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="testimonial-quote">"Cut acquisition costs by 40% & doubled qualified leads with Saleh's strategy."</p>
                <div className="testimonial-footer">
                  <img className="testimonial-avatar" src="/assets/images/emily-carter.png" alt="Emily Carter" loading="lazy" />
                  <div className="testimonial-meta">
                    <h4 className="testimonial-name">Emily Carter</h4>
                    <span className="testimonial-title">CTO, TechFlow Inc</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonials-row">
              {/* Card 4: Standard Card */}
              <div className="testimonial-card standard-card scroll-reveal">
                <div className="testimonial-stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="testimonial-quote">"From creative to performance, everything was handled with clarity and precision."</p>
                <div className="testimonial-footer">
                  <img className="testimonial-avatar" src="/assets/images/irfan-zafar.jpeg" alt="Irfan Zafar" loading="lazy" />
                  <div className="testimonial-meta">
                    <h4 className="testimonial-name">Irfan Zafar</h4>
                    <span className="testimonial-title">Real Estate Expert</span>
                  </div>
                </div>
              </div>

              {/* Card 5: Standard Card */}
              <div className="testimonial-card standard-card scroll-reveal">
                <div className="testimonial-stars">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="testimonial-quote">"Saleh helped us scale faster with smarter strategy and stronger creative execution."</p>
                <div className="testimonial-footer">
                  <img className="testimonial-avatar" src="/assets/images/usman-zafar.jpeg" alt="Dr. Usman Zafar" loading="lazy" />
                  <div className="testimonial-meta">
                    <h4 className="testimonial-name">Dr. Usman Zafar</h4>
                    <span className="testimonial-title">CEO & Founder, World Business Hub</span>
                  </div>
                </div>
              </div>

              {/* Card 6: Highlighted Featured Card (Image Based) */}
              <div className="testimonial-card highlighted-card featured-top-card scroll-reveal" style={{ backgroundImage: "url('/assets/images/Zk98K7iTo5ArC18iekSAcKmHTQ.png')" }}>
                <div className="highlighted-card-content">
                  <div className="testimonial-stars">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <p className="testimonial-quote">"Our engagement and conversions improved significantly within weeks of launching with Saleh."</p>
                  <div className="testimonial-featured-footer">
                    <span className="featured-name">Ryan Mitchell</span>
                    <span className="featured-dot">•</span>
                    <span className="featured-title">MD, GreenSupply</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-left-col">
            <div className="faq-pill">FAQ</div>
            <h2 className="faq-title">The questions<br />before you book.</h2>
            <p className="faq-subtitle">Straight answers to what experienced consultants and advisors ask before they reach out.</p>
          </div>

          <div className="faq-right-col">
            <div className="faq-list">
              {[
                {
                  question: "I have been burned by developers before. How is this different?",
                  answer: "Fair question, and the reason most of my clients come to me in the first place. Fixed timeline, fixed price, one prototype, a few review rounds, all written down on day one. No retainers. No scope creep. No chasing for updates."
                },
                {
                  question: "How long does a project take?",
                  answer: "A working prototype within three days. Site live in seven to fourteen days after you approve it. Larger projects with automations or AI take a few weeks more."
                },
                {
                  question: "How much does it cost?",
                  answer: "Every project is different, so every quote is different. I work with a range of budgets and shape the scope around what you actually need. We figure out the right fit on the call, and you get a flat number before anything begins."
                },
                {
                  question: "I am not technical. How much of my time will this take?",
                  answer: "Around 60 minutes across a couple of calls, plus your time in the review rounds. I handle the writing, design, build, hosting, and setup. You approve. That is it."
                },
                {
                  question: "I already have a website. It is just old. Can you redo it?",
                  answer: "Yes. Most clients come for exactly this. I rebuild from scratch so the site reflects where you are in your career today, not where you were a decade ago."
                },
                {
                  question: "Do you work with clients outside the UAE?",
                  answer: "Yes. Most of my work is remote. I work with consultants and advisors across the UAE, UK, US, and Europe."
                }
              ].map((item, idx) => (
                <div key={idx} className={`faq-card ${openFaqs[idx] ? 'faq-card-open' : ''}`}>
                  <div className="faq-card-header" onClick={() => toggleFaq(idx)}>
                    <h3 className="faq-question">{item.question}</h3>
                    <div className="faq-toggle-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="plus-icon">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </div>
                  </div>
                  <div className="faq-card-body">
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="final-cta-card" style={{ 
          backgroundImage: "url('/assets/images/Zk98K7iTo5ArC18iekSAcKmHTQ.png')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundColor: 'transparent'
        }}>
          <h2 className="final-cta-title">
            Every month without a real website<br />
            is a month of clients you never hear from.
          </h2>
          <div className="final-cta-button-wrapper">
            <a href="/contact" className="final-cta-btn">Book a Call</a>
            <p className="final-cta-microcopy">A 20 minute call. No pitch. Just clarity.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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

export default HomePage;
