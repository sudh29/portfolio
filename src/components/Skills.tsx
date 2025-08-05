import React from 'react'

interface Skill {
  name: string
  level: number
  category: string
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express.js', level: 80, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Backend' },
    { name: 'PostgreSQL', level: 70, category: 'Backend' },
    { name: 'MongoDB', level: 75, category: 'Backend' },
    
    // Tools & Others
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'Tools' },
    { name: 'AWS', level: 65, category: 'Tools' },
    { name: 'Figma', level: 75, category: 'Tools' },
    { name: 'Agile/Scrum', level: 80, category: 'Tools' }
  ]

  const categories = ['Frontend', 'Backend', 'Tools']

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
            <h4>Frontend Development</h4>
            <p>Building responsive and interactive user interfaces with modern frameworks and tools.</p>
          </div>
          <div className="summary-card">
            <h4>Backend Development</h4>
            <p>Creating robust server-side applications and APIs with scalable architectures.</p>
          </div>
          <div className="summary-card">
            <h4>DevOps & Tools</h4>
            <p>Deploying applications and managing development workflows efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 