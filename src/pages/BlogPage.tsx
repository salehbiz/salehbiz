import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { blogPosts } from '../data/blogData';
import RevealText from '../components/RevealText';
import Navbar from '../components/Navbar';
import './BlogPage.css';

const BlogPage: React.FC = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="blog-page-container">
      <Head>
        <title>Insights | Web Strategy and Personal Brand for Senior Consultants</title>
        <meta name="description" content="Strategy, web design, and digital presence thinking for consultants and advisors who have outgrown what they have online." />
        <link rel="canonical" href="https://saleh.biz/blog" />
      </Head>
      
      {/* ─── Organic Blurry Hero Background Gradient ─── */}
      <div className="blog-hero-bg" style={{ backgroundImage: "url('/assets/images/1MsDy3g9BqY7FoTXe3Gv7pkwx8.png')" }}>
        <div className="blog-hero-overlay"></div>

        {/* Navbar */}
        <Navbar activePage="blog" />

        {/* Hero Section */}
        <section className="blog-hero-section">
          <div className="blog-badge">Insights</div>
          <h1 className="blog-hero-title">
            <RevealText text={"Thinking out loud\nfor senior consultants."} delayOffset={0} />
          </h1>
          <p className="blog-hero-subtitle">
            <RevealText text={"Strategy, web design, and digital presence for consultants and advisors\nwho have outgrown what they have online."} delayOffset={0.4} />
          </p>
        </section>
      </div>

      {/* Cards Section */}
      <div className="blog-cards-section">
        <div className="blog-grid-container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link
                to={`/blog/${post.slug}`}
                className="blog-card-link"
                key={post.slug}
              >
                <div className="blog-card">
                  {/* Image wrapper with overlaid orange category pill */}
                  <div className="blog-card-img-wrapper">
                    <span className="blog-category-pill">{post.category}</span>
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="blog-card-img"
                      loading="lazy"
                    />
                  </div>
                  {/* Info bar with Title, Date, Read Time, and Arrow */}
                  <div className="blog-card-info">
                    <div className="blog-card-meta-row">
                      <span className="blog-card-date">{post.date}</span>
                      <span className="blog-card-dot">•</span>
                      <span className="blog-card-read-time">{post.readTime}</span>
                    </div>
                    <div className="blog-card-title-row">
                      <h3 className="blog-card-title">{post.title}</h3>
                      <span className="card-arrow">↗</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
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

export default BlogPage;
