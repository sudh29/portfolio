import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId: string) => {
    const isPortfolioPage =
      location.pathname === '/portfolio/' || location.pathname === '/portfolio';

    if (isPortfolioPage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/portfolio/#${sectionId}`;
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sudhanshu Chaudhary</h3>
            <p>
              Technical Lead with 7+ years of experience building AI-driven
              solutions and leading development teams.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/portfolio/#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
              <li><a href="/portfolio/#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About</a></li>
              <li><a href="/portfolio/#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}>Projects</a></li>
              <li><a href="/portfolio/#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
              <li><a href="https://www.github.com/sudh29" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/sudh29" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:sudhanshuiet15@gmail.com">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sudhanshu Chaudhary. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop}>
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
