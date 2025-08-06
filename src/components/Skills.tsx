import React from 'react'

interface Skill {
  name: string
  level: number
  category: string
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Programming Languages
    { name: 'Python', level: 95, category: 'Programming Languages' },
    { name: 'C/C++', level: 85, category: 'Programming Languages' },
    { name: 'SQL', level: 90, category: 'Programming Languages' },
    { name: 'Shell Scripting', level: 80, category: 'Programming Languages' },
    { name: 'Mojo', level: 75, category: 'Programming Languages' },
    
    // Frameworks
    { name: 'FastAPI', level: 90, category: 'Frameworks' },
    { name: 'Django', level: 85, category: 'Frameworks' },
    { name: 'Flask', level: 80, category: 'Frameworks' },
    
    // Libraries & ML
    { name: 'NumPy', level: 90, category: 'Libraries & ML' },
    { name: 'Pandas', level: 95, category: 'Libraries & ML' },
    { name: 'Polars', level: 85, category: 'Libraries & ML' },
    { name: 'OpenCV', level: 80, category: 'Libraries & ML' },
    { name: 'Scikit-learn', level: 85, category: 'Libraries & ML' },
    { name: 'TensorFlow', level: 80, category: 'Libraries & ML' },
    
    // Tools & Technologies
    { name: 'Git', level: 90, category: 'Tools & Technologies' },
    { name: 'Docker', level: 85, category: 'Tools & Technologies' },
    { name: 'Kubernetes', level: 75, category: 'Tools & Technologies' },
    { name: 'AWS', level: 80, category: 'Tools & Technologies' },
    { name: 'MongoDB', level: 85, category: 'Tools & Technologies' },
    { name: 'PostgreSQL', level: 80, category: 'Tools & Technologies' },
    { name: 'Redis', level: 75, category: 'Tools & Technologies' },
    { name: 'Selenium', level: 85, category: 'Tools & Technologies' },
    { name: 'Linux', level: 90, category: 'Tools & Technologies' },
    { name: 'Jira', level: 85, category: 'Tools & Technologies' },
    { name: 'REST APIs', level: 90, category: 'Tools & Technologies' }
  ]

  const categories = ['Programming Languages', 'Frameworks', 'Libraries & ML', 'Tools & Technologies']

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Expertise</h2>
          <p>Technologies I work with</p>
        </div>
        
        <div className="skills-content">
          {categories.map(category => (
            <div key={category} className="skills-category">
              <h3>{category}</h3>
              <div className="skills-grid">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-card">
            <h4>AI/ML & Data Engineering</h4>
            <p>Building intelligent systems with Python, TensorFlow, and advanced data processing pipelines for scalable solutions.</p>
          </div>
          <div className="summary-card">
            <h4>Full-Stack Development</h4>
            <p>Creating robust web applications and APIs using modern frameworks and cloud-native technologies.</p>
          </div>
          <div className="summary-card">
            <h4>DevOps & Automation</h4>
            <p>Deploying applications with Docker/Kubernetes and automating workflows for improved efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 