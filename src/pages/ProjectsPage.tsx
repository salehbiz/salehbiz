import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import RevealText from '../components/RevealText';
import Navbar from '../components/Navbar';
import './ProjectsPage.css';

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page-container">

      {/* ─── Page-wide Background Video (Absolute at top) ─── */}
      <div className="projects-bg-wrapper">
        <video className="projects-bg-video" autoPlay muted loop playsInline poster="/assets/images/elevon_hero_bg.png">
          <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="projects-bg-overlay"></div>
        <div className="projects-bg-fade"></div>
      </div>

      {/* Navbar */}
      <Navbar activePage="projects" />

      {/* Hero Header */}
      <header className="project-hero-header">
        <div className="portfolio-badge">Recent Work</div>
        <h1 className="heroTitle">
          <RevealText text={"A small body of work.\nTaken personally."} delayOffset={0} />
        </h1>
        <p className="heroSubtitle">
          <RevealText text={"Every project on this page started the same way.\nA consultant or advisor who needed a website\nthat finally matched their career."} delayOffset={0.4} />
        </p>
      </header>

      {/* Cards Section */}
      <div className="projects-cards-section">
        <div className="projects-grid-container">
          <div className="projects-grid">
            {projects.map((project) => (
              <Link
                to={`/project/${project.slug}`}
                className="project-card-link"
                key={project.slug}
              >
                <div className="project-card">
                  {/* Image fills naturally — no cropping */}
                  <div className="project-card-img-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-card-img"
                      loading="lazy"
                    />
                  </div>
                  {/* Title bar — no year */}
                  <div className="project-card-info">
                    <h3 className="project-card-title">{project.title}</h3>
                    <span className="card-arrow">↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
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
                <a href="#terms" className="footer-legal-link">Terms &amp; Conditions</a>
                <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
};

export default ProjectsPage;
