import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import Navbar from '../components/Navbar';
import { injectSchema } from '../utils/schema';
import './BlogPostPage.css';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Scroll to top on page load or slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // Find the active blog post
  const currentPostIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[currentPostIndex];

  // Dynamic JSON-LD schema injection for SEO/GEO
  useEffect(() => {
    if (!post) return;

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.subtitle,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": "Saleh",
        "url": "https://saleh.biz"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Salehbiz",
        "url": "https://saleh.biz"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://saleh.biz/blog/${post.slug}`
      }
    };

    return injectSchema(`schema-article-${post.slug}`, articleSchema);
  }, [post]);

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <div className="not-found-content">
          <h1>Article Not Found</h1>
          <p>We couldn't find the article you are looking for. It might have been moved or renamed.</p>
          <button onClick={() => navigate('/blog')} className="btn-back-blog">
            Back to Insights
          </button>
        </div>
      </div>
    );
  }

  // Calculate the next article link
  const nextPostIndex = (currentPostIndex + 1) % blogPosts.length;
  const nextPost = blogPosts[nextPostIndex];

  return (
    <div className="blog-post-detail-container">
      
      {/* ─── Hero Wrapper ─── */}
      <div className="blog-post-hero-wrapper" style={{ backgroundImage: "url('/assets/images/1MsDy3g9BqY7FoTXe3Gv7pkwx8.png')" }}>
        {/* Dark overlay for contrast and premium look */}
        <div className="blog-post-hero-overlay"></div>

        {/* Navbar */}
        <Navbar activePage="blog" />

        {/* Hero Section */}
        <section className="blog-post-hero-section">
          <Link to="/blog" className="back-link-btn">
            <span className="arrow">←</span> Back to Insights
          </Link>
          
          <div className="blog-post-hero-meta">
            <span className="post-category-badge">{post.category}</span>
            <span className="blog-meta-divider">•</span>
            <span className="blog-post-date">{post.date}</span>
            <span className="blog-meta-divider">•</span>
            <span className="blog-post-readtime">{post.readTime}</span>
          </div>

          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-subtitle">{post.subtitle}</p>
        </section>
      </div>

      {/* Full-width cover image below the meta */}
      <section className="blog-cover-image-section">
        <div className="blog-cover-image-wrapper">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="blog-cover-img" 
            loading="lazy"
          />
        </div>
      </section>

      {/* Clean article body - single column, max-width 720px centered */}
      <article className="blog-article-body">
        <div className="blog-article-content-wrapper">
          {post.body.map((section, idx) => (
            <div key={idx} className="blog-article-section">
              <h3 className="blog-section-header">{section.heading}</h3>
              <p className="blog-section-paragraph">{section.content}</p>
              {section.image && (
                <div className="blog-section-image-wrapper">
                  <img 
                    src={section.image} 
                    alt={section.heading} 
                    className="blog-section-img" 
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </article>

      {/* Next Article link at the bottom */}
      <section className="next-article-section">
        <div className="next-article-container">
          <span className="next-article-label">Next article</span>
          <Link to={`/blog/${nextPost.slug}`} className="next-article-link">
            <h4 className="next-article-title">{nextPost.title}</h4>
            <span className="next-article-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* Final CTA section matching site's existing CTA card style */}
      <section className="blog-cta-section">
        <div className="blog-cta-container">
          <h2 className="cta-title">Ready to finally have a site that matches your career?</h2>
          <p className="cta-subtitle">If your digital presence has outgrown what you have online, let's have a 20-minute conversation.</p>
          <Link to="/contact" className="cta-btn">Book a Call</Link>
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
  );
};

export default BlogPostPage;
