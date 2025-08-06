import React, { useEffect, useState } from 'react'

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    "Technical Lead",
    "Software Engineer", 
    "AI/ML Specialist",
    "Full-Stack Developer"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [texts.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Sudhanshu Chaudhary</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="animated-text">{texts[currentText]}</span>
            </h2>
            <p className="hero-description">
              Software Engineer and Technical Lead with 7+ years of experience building full-stack and AI-driven solutions across healthcare,
              telecom, and manufacturing. Skilled in leading teams, automating workflows, and deploying scalable platforms.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span>SC</span>
                </div>
              </div>
              <div className="profile-info">
                <h3>Sudhanshu Chaudhary</h3>
                <p>Technical Lead</p>
                <div className="tech-stack">
                  <span>Python</span>
                  <span>AI/ML</span>
                  <span>Full-Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 