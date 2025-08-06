import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sudhanshu Chaudhary</h3>
            <p>Technical Lead with 7+ years of experience building AI-driven solutions and leading development teams.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://www.github.com/sudh29" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/sudh29" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:sudhanshuiet15@gmail.com">Email</a>
            </div>
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
  )
}

export default Footer 