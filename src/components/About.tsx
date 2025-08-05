import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. 
              I enjoy creating software that solves real-world problems and provides excellent user experiences.
            </p>
            <p>
              With expertise in React, TypeScript, Node.js, and various other technologies, 
              I build scalable and maintainable applications that make a difference.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>2+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>15+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="about-details">
            <div className="detail-section">
              <h3>Experience</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Full Stack Developer</h4>
                    <p className="company">Tech Company</p>
                    <p className="duration">2022 - Present</p>
                    <p>Developed and maintained web applications using React, Node.js, and TypeScript.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Frontend Developer</h4>
                    <p className="company">Startup</p>
                    <p className="duration">2021 - 2022</p>
                    <p>Built responsive user interfaces and implemented modern design patterns.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="detail-section">
              <h3>Education</h3>
              <div className="education-item">
                <h4>Bachelor's in Computer Science</h4>
                <p className="institution">University Name</p>
                <p className="year">2018 - 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 