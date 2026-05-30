import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RevealText from '../components/RevealText';
import Navbar from '../components/Navbar';
import { injectSchema } from '../utils/schema';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({});

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Inject JSON-LD Person schema for SEO/GEO
  useEffect(() => {
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Saleh",
      "jobTitle": "Founder, Salehbiz",
      "url": "https://saleh.biz",
      "worksFor": {
        "@type": "Organization",
        "name": "Salehbiz",
        "url": "https://saleh.biz"
      },
      "description": "Solo web designer and builder specialising in websites and digital systems for senior consultants and advisors.",
      "areaServed": ["UAE", "United Kingdom", "United States", "Europe"]
    };

    return injectSchema('schema-person', personSchema);
  }, []);

  const howIWork = [
    { num: '01', title: 'One client at a time', body: 'I take on a small number of projects per month so every one gets full attention.', tag: 'Focus' },
    { num: '02', title: 'Prototype first', body: 'You see a working version of your site within three days, before any real build begins.', tag: 'Speed' },
    { num: '03', title: 'Updates without asking', body: 'You get regular video walkthroughs as the site comes together.', tag: 'Visibility' },
    { num: '04', title: 'Review rounds', body: 'We run a few rounds together so the site ends up exactly how you want it.', tag: 'Control' },
    { num: '05', title: 'Yours at the end', body: 'When we finish, you get everything. Files, access, ownership. Clean handover.', tag: 'Ownership' }
  ];

  return (
    <div className="about-page-container">
      
      {/* ─── Organic Blurry Hero Background Gradient ─── */}
      <div className="about-hero-bg" style={{ backgroundImage: "url('/assets/images/1MsDy3g9BqY7FoTXe3Gv7pkwx8.png')" }}>
        <div className="about-hero-overlay"></div>

        {/* Navbar */}
        <Navbar activePage="about" />

        {/* Hero Section */}
        <section className="about-hero-section">
          <div className="about-badge">About</div>
          <h1 className="about-hero-title">
            <RevealText text={"A solo builder\nfor senior consultants."} delayOffset={0} />
          </h1>
          <p className="about-hero-subtitle">
            <RevealText text={"I build websites, brand systems, and automations\nfor consultants and advisors based in the UAE and beyond."} delayOffset={0.4} />
          </p>
        </section>
      </div>

      {/* Team Widescreen Showcase Image Section */}
      <section className="about-team-showcase-section">
        <div className="about-team-image-wrapper">
          <img 
            src="/assets/images/about-team.jpeg" 
            alt="Salehbiz Creative Team" 
            className="about-team-img" 
            loading="lazy"
          />
        </div>
      </section>

      {/* Our Story & Principles Section */}
      <section className="about-detail-section story-section">
        <div className="story-badge">The Story</div>
        <h2 className="story-heading">
          Built from scratch.<br />Built on purpose.
        </h2>

        {/* Principles Grid (Restructured Stats Grid) */}
        <div className="about-stats-grid">
          <div className="about-stat-card">
            <span className="stat-index">I.</span>
            <div className="principle-content">
              <h3 className="principle-title">Senior only</h3>
              <p className="principle-body">I work with consultants and advisors. Not startups, not agencies, not everyone.</p>
            </div>
          </div>
          <div className="about-stat-card">
            <span className="stat-index">II.</span>
            <div className="principle-content">
              <h3 className="principle-title">Fixed and flat</h3>
              <p className="principle-body">One price, one timeline, written down before anything begins.</p>
            </div>
          </div>
          <div className="about-stat-card">
            <span className="stat-index">III.</span>
            <div className="principle-content">
              <h3 className="principle-title">Built fast</h3>
              <p className="principle-body">A working prototype in three days. Site live in seven to fourteen.</p>
            </div>
          </div>
          <div className="about-stat-card">
            <span className="stat-index">IV.</span>
            <div className="principle-content">
              <h3 className="principle-title">Owned by you</h3>
              <p className="principle-body">When the project ends, everything is yours. The site, the files, the access.</p>
            </div>
          </div>
        </div>

        {/* Narrative & Split Layout */}
        <div className="story-split-layout">
          {/* Left Column */}
          <div className="story-left-col">
            <p className="story-philosophy-text">
              SALEHBIZ started with a simple observation. The people I respected most on LinkedIn, consultants and advisors with decades of real experience, almost always had websites that quietly worked against them. Outdated, generic, or missing entirely. I studied computer science and design, and over the last two years I built sites, systems, and tools for clients across the UAE and outside it. SALEHBIZ is what came out of that. One builder, focused on one kind of client, doing it properly.
            </p>
          </div>

          {/* Right Column */}
          <div className="story-right-col">
            <div className="story-block">
              <div className="story-bullet-dot"></div>
              <h3 className="story-block-title">What I do</h3>
              <p className="story-block-desc">
                I build websites and digital systems for senior consultants and advisors who have outgrown what they currently have online.
              </p>
            </div>

            <div className="story-block">
              <div className="story-bullet-dot"></div>
              <h3 className="story-block-title">Who I do it for</h3>
              <p className="story-block-desc">
                People with real careers, real reputations, and a digital presence that no longer reflects either.
              </p>
            </div>

            <button onClick={() => navigate('/contact')} className="btn-get-in-touch">
              Book a Call
            </button>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-detail-section ceo-section">
        <div className="story-badge">Founder</div>
        <div className="ceo-split-layout">
          {/* Left Column: CEO portrait */}
          <div className="ceo-left-col">
            <div className="ceo-image-container">
              <img src="/assets/images/ceo-portrait.jpeg" alt="Saleh - Founder" className="ceo-image" loading="lazy" />
            </div>
          </div>
          {/* Right Column: Narrative */}
          <div className="ceo-right-col">
            <h2 className="ceo-heading">The person behind the work.</h2>
            <p className="ceo-subtitle">I'm Saleh, the founder and the only builder behind every project that ships from here.</p>
            
            <div className="ceo-quote-container">
              <p className="ceo-quote-text">"Most of my clients don't need a bigger team. They need one person who actually cares about the outcome."</p>
            </div>
            
            <div className="ceo-narrative">
              <p>
                I studied computer science and design, then spent the last two years building websites, brand systems, and automations for clients across the UAE and beyond. Some were consultants. Some were small businesses. Some were friends of friends. All of them needed the same thing. Someone who would treat the project like it mattered.
              </p>
              <p>
                SALEHBIZ exists because the people who hire me deserve more than a template, more than an agency markup, and more than a three month timeline. They get one builder, a clear process, and a result that finally looks like the career behind it.
              </p>
            </div>
            
            <button onClick={() => navigate('/contact')} className="btn-ceo-cta">
              Book a Call
            </button>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="about-detail-section awards-section">
        <div className="awards-badge">How I Work</div>
        <h2 className="awards-heading">The way I run every project.</h2>
        <p className="awards-subheading">
          A short list of how things actually go when you work with me.<br />
          No surprises, no theatre, no chasing.
        </p>

        {/* How I Work Rows */}
        <div className="awards-list-container">
          {howIWork.map((item, index) => (
            <div key={index} className="award-row">
              <span className="award-year">{item.num}</span>
              <span className="award-title">{item.title}</span>
              <span className="award-organization">{item.body}</span>
              <div className="award-badge-wrapper">
                <span className="award-project-badge">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <div className="testimonials-pill">Selected feedback</div>
            <h2 className="testimonials-title">What clients say<br />after launch.</h2>
            <p className="testimonials-subtitle">
              A small body of work means a small set of stories. Every one of them mattered.
            </p>
          </div>

          <div className="testimonials-rows-container">
            <div className="testimonials-row">
              {/* Card 1: Standard Card */}
              <div className="testimonial-card standard-card">
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
              <div className="testimonial-card highlighted-card featured-top-card" style={{ backgroundImage: "url('/assets/images/Zk98K7iTo5ArC18iekSAcKmHTQ.png')" }}>
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
              <div className="testimonial-card standard-card">
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
              <div className="testimonial-card standard-card">
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
              <div className="testimonial-card standard-card">
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
              <div className="testimonial-card highlighted-card featured-top-card" style={{ backgroundImage: "url('/assets/images/Zk98K7iTo5ArC18iekSAcKmHTQ.png')" }}>
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

      {/* Global Master Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-left-col">
              <nav className="footer-nav">
                <a href="/about" className="footer-nav-link active">About</a>
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

export default AboutPage;
