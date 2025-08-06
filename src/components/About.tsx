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
              I'm a Software Engineer and Technical Lead with 7+ years of experience building full-stack and AI-driven solutions 
              across healthcare, telecom, and manufacturing. I specialize in leading teams, automating workflows, and deploying 
              scalable platforms that drive business value.
            </p>
            <p>
              With expertise in Python, AI/ML, data engineering, and full-stack development, I build solutions that solve 
              real-world problems and deliver measurable impact. I'm passionate about applying strong technical skills to 
              deliver high-impact, business-aligned software solutions.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>7+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>20+</h4>
                <p>Projects Led</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Automation Success</p>
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
                    <h4>Technical Lead</h4>
                    <p className="company">Jorie AI</p>
                    <p className="duration">JUL 2024 — Present, Noida, India</p>
                    <p>Leading development of next-generation RCM automation platform, managing 20+ developers, and delivering end-to-end automation solutions for healthcare providers.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Senior Software Engineer</h4>
                    <p className="company">HCLSoftware</p>
                    <p className="duration">JUL 2021 — JUL 2024, Noida, India</p>
                    <p>Pioneered 5G Massive MIMO features, developed energy optimization applications, and led various modules within the ANA platform achieving significant cost savings.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Junior Telecom Officer</h4>
                    <p className="company">BSNL</p>
                    <p className="duration">NOV 2017 — AUG 2019, Rajkot, India</p>
                    <p>Automated remote configurations and fault detection, reducing network downtime by 30% and increasing revenue by 25% through operational efficiency.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>Project Engineer</h4>
                    <p className="company">WIPRO</p>
                    <p className="duration">SEP 2015 — SEP 2016, Pune, India</p>
                    <p>Developed ETL pipelines and web applications for Outokumpu's Global Business Intelligence team, achieving 15% increase in returns and 20% cost reduction.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="detail-section">
              <h3>Education</h3>
              <div className="education-item">
                <h4>Master of Technology, Telecom Technology and Management</h4>
                <p className="institution">Indian Institute of Technology, Delhi</p>
                <p className="year">2019 — 2021</p>
              </div>
              <div className="education-item">
                <h4>Bachelor of Technology (Hons.), Electronics and Instrumentation</h4>
                <p className="institution">Institute of Engineering and Technology, Lucknow</p>
                <p className="year">2011 — 2015</p>
              </div>
            </div>

            <div className="detail-section">
              <h3>Achievements</h3>
              <div className="achievement-item">
                <h4>MHRD Scholarship</h4>
                <p>Awarded scholarship for securing AIR 95 in GATE-2019 (IN)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 