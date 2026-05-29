import React from 'react';
import RevealText from './RevealText';
import Navbar from './Navbar';
import './HomeHero.css';

const HomeHero: React.FC = () => {
  return (
    <section className="hero">
      <video
        className="heroVideo"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="shadow-vignette"></div>
      <div className="bottomShadow"></div>
      
      <Navbar activePage="home" />

      <div className="heroContent">
        <div className="rating">
          <span className="ratingText">For consultants and advisors with 10+ years on LinkedIn</span>
        </div>

        <h1 className="heroTitle">
          <RevealText text={"Your LinkedIn says expert.\nYour website says otherwise."} delayOffset={0} />
        </h1>

        <p className="heroSubtitle">
          <RevealText text={"I build websites for senior consultants and advisors whose online presence stopped matching their career a long time ago."} delayOffset={0.4} />
        </p>

        <a href="/contact" className="cta" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
          Book a Call
        </a>

        <div className="trusted">
          A 20 minute call. No pitch. No packages.
        </div>
        
        <div className="logoMarquee">
          <div className="logoRow">
            <div className="logo-item">Websites</div>
            <div className="logo-item">Brand Identity</div>
            <div className="logo-item">Automations</div>
            <div className="logo-item">CRM Systems</div>
            <div className="logo-item">Websites</div>
            <div className="logo-item">Brand Identity</div>
            <div className="logo-item">Automations</div>
            <div className="logo-item">CRM Systems</div>
          </div>
          <div className="logoRow" aria-hidden="true">
            <div className="logo-item">Websites</div>
            <div className="logo-item">Brand Identity</div>
            <div className="logo-item">Automations</div>
            <div className="logo-item">CRM Systems</div>
            <div className="logo-item">Websites</div>
            <div className="logo-item">Brand Identity</div>
            <div className="logo-item">Automations</div>
            <div className="logo-item">CRM Systems</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
