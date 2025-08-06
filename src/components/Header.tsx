import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  // Helper to handle nav click for sections
  const handleNavClick = (sectionId: string) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId)
    } else {
      // Navigate to home, then scroll after navigation
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Sudhanshu Chaudhary</h2>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">Home</Link></li>
              <li><button onClick={() => handleNavClick('about')}>About</button></li>
              <li><button onClick={() => handleNavClick('skills')}>Skills</button></li>
              <li><button onClick={() => handleNavClick('projects')}>Projects</button></li>
              <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
              <li><Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">Blog</Link></li>
            </ul>
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <button 
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 