import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import './ProjectDetailPage.css';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Scroll to top on page load or slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // Find the active project
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail-not-found">
        <div className="not-found-content">
          <h1>Project Not Found</h1>
          <p>We couldn't find the project you are looking for. It might have been moved or renamed.</p>
          <button onClick={() => navigate('/project')} className="btn-back-home">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <Head>
        <title>{`${project.title} | Salehbiz`}</title>
        <meta name="description" content={project.challenge} />
        <link rel="canonical" href={`https://saleh.biz/project/${project.slug}`} />
      </Head>
      {/* Hero Wrapper with the requested background image */}
      <div className="project-detail-hero-wrapper" style={{ backgroundImage: "url('/assets/images/1MsDy3g9BqY7FoTXe3Gv7pkwx8.png')" }}>
        {/* Dark overlay for contrast and premium look */}
        <div className="project-detail-hero-overlay"></div>

        {/* Header / Navbar */}
        <Navbar activePage="projects" />

        {/* Hero Section (Screenshot 1) */}
        <section className="project-hero-section">
          <button onClick={() => navigate('/project')} className="back-link-btn">
            <span className="arrow">←</span> Back to Projects
          </button>
        
        <div className="project-hero-grid">
          {/* Left Column: Date, Title, Description, Tags */}
          <div className="project-hero-left">
            <span className="project-hero-date">{project.date || '12/01/2026'}</span>
            <h1 className="project-hero-title">{project.title}</h1>
            <p className="project-hero-description">
              {project.solution}
            </p>
            <div className="project-tags-container">
              {(project.tags || [project.category]).map((tag, idx) => (
                <span key={idx} className="project-tag-pill">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right Column: Floating Glassmorphism Metadata Card */}
          <div className="project-hero-right">
            <div className="project-meta-glass-card">
              <div className="project-meta-group">
                <span className="project-meta-label">Services</span>
                <span className="project-meta-value">{project.services.join(', ')}</span>
              </div>
              <div className="project-meta-group">
                <span className="project-meta-label">Category</span>
                <span className="project-meta-value">{project.category}</span>
              </div>
              <div className="project-meta-group">
                <span className="project-meta-label">Client</span>
                <span className="project-meta-value">{project.client}</span>
              </div>
              
              {project.slug === 'usman-zafar' || project.slug === 'raco' ? (
                <div className="internal-project-container">
                  <button className="btn-view-live disabled" disabled>
                    Internal project, link unavailable
                  </button>
                  <p className="internal-project-note">
                    Some projects are built for internal use and are not publicly accessible.
                  </p>
                </div>
              ) : project.liveUrl ? (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-view-live"
                >
                  View Live Website
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>

      {/* Main Website Showcase Image (Screenshot 2) */}
      <section className="project-showcase-section">
        <div className="project-showcase-wrapper">
          <img 
            src={project.image} 
            alt={`${project.title} Widescreen Showcase`} 
            className="project-showcase-img" 
            loading="lazy"
          />
        </div>
      </section>

      {/* Brief Section (Screenshot 3) */}
      {project.briefText && project.briefText.length > 0 && (
        <section className="project-detail-section brief-section">
          <h2 className="section-title">Brief</h2>
          <div className="section-content">
            {project.briefText.map((paragraph, idx) => (
              <p key={idx} className="section-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Side-by-side images below brief text */}
          {project.briefImages && project.briefImages.length >= 2 && (
            <div className="project-brief-images-grid">
              <div className="brief-img-card">
                <img 
                  src={project.briefImages[0]} 
                  alt={`${project.title} Brief Details Left`} 
                  className="brief-showcase-img"
                  loading="lazy"
                />
              </div>
              <div className="brief-img-card">
                <img 
                  src={project.briefImages[1]} 
                  alt={`${project.title} Brief Details Right`} 
                  className="brief-showcase-img"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </section>
      )}

      {/* The Challenge Section (Screenshot 4) */}
      {project.challengeText && project.challengeText.length > 0 && (
        <section className="project-detail-section challenge-section">
          <h2 className="section-title">The Challenge</h2>
          <div className="section-content">
            {project.challengeText.map((paragraph, idx) => (
              <p key={idx} className="section-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Large challenge mockup showcase image */}
          {project.challengeImage && (
            <div className="project-challenge-image-wrapper">
              <img 
                src={project.challengeImage} 
                alt={`${project.title} Challenge Mockup`} 
                className="challenge-showcase-img"
                loading="lazy"
              />
            </div>
          )}
        </section>
      )}

      {/* Approach, Results, & Conclusion (Screenshot 5) */}
      <section className="project-detail-section approach-results-conclusion-section">
        {/* Our Approach Sub-section */}
        {project.approachIntro && (
          <div className="sub-section">
            <h2 className="section-title">Our Approach</h2>
            <div className="section-content">
              <p className="section-paragraph">{project.approachIntro}</p>
              {project.approachBullets && project.approachBullets.length > 0 && (
                <ul className="section-bullet-list">
                  {project.approachBullets.map((bullet, idx) => (
                    <li key={idx} className="bullet-item">
                      <span className="bullet-icon">•</span>
                      <span className="bullet-text">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* The Results Sub-section */}
        {project.resultsIntro && (
          <div className="sub-section">
            <h2 className="section-title">The Results</h2>
            <div className="section-content">
              <p className="section-paragraph">{project.resultsIntro}</p>
              {project.resultsBullets && project.resultsBullets.length > 0 && (
                <ul className="section-bullet-list metric-list">
                  {project.resultsBullets.map((bullet, idx) => (
                    <li key={idx} className="bullet-item metric-item">
                      <span className="bullet-icon">•</span>
                      <span className="bullet-text">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* Conclusion Sub-section */}
        {project.conclusionText && (
          <div className="sub-section">
            <h2 className="section-title">Conclusion</h2>
            <div className="section-content">
              <p className="section-paragraph">{project.conclusionText}</p>
            </div>
          </div>
        )}
      </section>

      {/* Have a Project in Mind CTA */}
      <section className="detail-cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Have a project in mind?</h2>
          <p className="cta-subtitle">If your website hasn't kept up with your career, that's worth a 20 minute conversation.</p>
          <a href="/contact" className="cta-btn">Book a Call</a>
        </div>
      </section>

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
                  <a href="https://www.instagram.com/salehbiz" className="footer-social-link">Instagram</a>
                  <a href="https://www.linkedin.com/in/salehbiz" className="footer-social-link">LinkedIn</a>
                  <a href="https://x.com/salehbiz" className="footer-social-link">X</a>
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

export default ProjectDetailPage;
