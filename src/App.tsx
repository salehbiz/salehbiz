import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AriaPage from './pages/AriaPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <ReactLenis root options={{ 
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: !isReducedMotion 
    }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectsPage />} />
            <Route path="/project/:slug" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/aria" element={<AriaPage />} />
          </Routes>
          
          {/* The widget is globally available but can be specific per route if needed. 
              Currently, it's also included inside AriaPage for testing. */}
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;
