import React, { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects: Project[] = [
    {
      id: 1,
      title: "RCM Automation Platform",
      description: "Led development of next-generation Revenue Cycle Management automation platform, reducing manual effort by over 70% and streamlining claims processing across hospitals and insurance providers in the U.S.",
      image: "https://via.placeholder.com/400x250/2563eb/ffffff?text=RCM+Platform",
      technologies: ["Python", "FastAPI", "OpenAI", "Azure Vision", "Docker", "Power BI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "5G Massive MIMO Energy Optimization",
      description: "Pioneered groundbreaking feature for Massive MIMO 5G New Radio base stations, achieving 68% reduction in energy wastage and delivering Energy Savings Dashboard SON-Flex application.",
      image: "https://via.placeholder.com/400x250/7c3aed/ffffff?text=5G+Energy+Opt",
      technologies: ["Python", "C++", "ML", "REST APIs", "Docker", "Kubernetes"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Intelligent Dynamic Energy Saving-4G",
      description: "Designed and developed ML-driven cell adjustment application to optimize energy usage through real-time adjustments, resulting in $2M annual OPEX savings.",
      image: "https://via.placeholder.com/400x250/059669/ffffff?text=Energy+Saving+4G",
      technologies: ["Python", "Machine Learning", "Real-time Processing", "API Integration"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Healthcare Automation Solutions",
      description: "Delivered custom healthcare automation using Python, Selenium, APIs, and Docker achieving 100% elimination of manual tasks, with Power BI dashboards for real-time monitoring.",
      image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=Healthcare+Auto",
      technologies: ["Python", "Selenium", "Docker", "Power BI", "REST APIs"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Network Automation & Monitoring",
      description: "Automated remote configurations and fault detection using Python and pandas, reducing network downtime by 30% and increasing revenue by 25% through operational efficiency.",
      image: "https://via.placeholder.com/400x250/ea580c/ffffff?text=Network+Auto",
      technologies: ["Python", "Pandas", "Paramiko", "AWS CloudWatch", "SSH"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "ETL Pipeline & BI Dashboard",
      description: "Implemented robust automated ETL pipeline for real-time data processing and developed Flask web application with interactive dashboards, achieving 15% increase in returns.",
      image: "https://via.placeholder.com/400x250/be185d/ffffff?text=ETL+BI+Dashboard",
      technologies: ["Python", "Flask", "SQL", "ETL", "Data Processing"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ]

  const filters = ['all', 'featured', 'healthcare', 'telecom', 'automation']

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(p => p.featured)
    : projects

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Key Projects & Achievements</h2>
          <p>Some of my significant work contributions</p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Details
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in working together?</p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              const contactSection = document.getElementById('contact')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects 