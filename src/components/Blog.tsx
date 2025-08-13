import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  readTime: string
  image: string
  featured: boolean
}

const Blog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Building Scalable AI Solutions: Lessons from Healthcare Automation",
      excerpt: "Exploring the challenges and solutions in developing AI-driven healthcare automation platforms that process millions of claims daily.",
      content: "In my role as Technical Lead at Jorie AI, I've led the development of next-generation RCM automation platforms that process healthcare claims at scale. This article shares key insights into building robust AI solutions that can handle the complexity of healthcare data while maintaining accuracy and compliance...",
      date: "December 2024",
      category: "AI and AI agents",
      readTime: "8 min read",
      image: "https://via.placeholder.com/400x250/2563eb/ffffff?text=AI+Healthcare",
      featured: true
    },
    {
      id: 2,
      title: "Optimizing 5G Networks: Energy Efficiency in Massive MIMO Systems",
      excerpt: "A deep dive into the energy optimization techniques that achieved 68% reduction in energy wastage for 5G Massive MIMO base stations.",
      content: "The telecommunications industry faces significant challenges in balancing network performance with energy efficiency. Our work on 5G Massive MIMO energy optimization at HCLSoftware demonstrated how intelligent algorithms can dramatically reduce energy consumption while maintaining network quality...",
      date: "November 2024",
      category: "System design",
      readTime: "12 min read",
      image: "https://via.placeholder.com/400x250/7c3aed/ffffff?text=5G+Energy",
      featured: true
    },
    {
      id: 3,
      title: "Python Automation in Network Management: A Practical Guide",
      excerpt: "How to automate network configurations and monitoring using Python, Paramiko, and AWS CloudWatch for improved operational efficiency.",
      content: "Network automation is crucial for modern telecommunications. This guide covers practical approaches to automating network configurations, fault detection, and monitoring using Python libraries like Paramiko for SSH connections and AWS CloudWatch for real-time monitoring...",
      date: "October 2024",
      category: "Python",
      readTime: "10 min read",
      image: "https://via.placeholder.com/400x250/059669/ffffff?text=Network+Auto",
      featured: false
    },
    {
      id: 4,
      title: "ETL Pipeline Design: From Concept to Production",
      excerpt: "Best practices for designing and implementing robust ETL pipelines that handle real-time data processing for business intelligence.",
      content: "ETL (Extract, Transform, Load) pipelines are the backbone of data-driven organizations. This article explores the design principles, implementation strategies, and monitoring approaches that ensure reliable data processing at scale...",
      date: "September 2024",
      category: "DSA",
      readTime: "15 min read",
      image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=ETL+Pipeline",
      featured: false
    },
    {
      id: 5,
      title: "Mastering Concurrency in Rust",
      excerpt: "A guide to Rust's powerful concurrency features, including threads, channels, and shared state.",
      content: "Technical leadership requires a unique blend of technical expertise and people management skills. This article shares practical strategies for leading development teams, managing technical debt, and delivering high-quality software products...",
      date: "August 2024",
      category: "Rust",
      readTime: "6 min read",
      image: "https://via.placeholder.com/400x250/ea580c/ffffff?text=Tech+Leadership",
      featured: false
    },
    {
      id: 6,
      title: "Machine Learning in Production: Deployment Strategies",
      excerpt: "Comprehensive guide to deploying ML models in production environments with Docker, Kubernetes, and monitoring solutions.",
      content: "Deploying machine learning models in production requires careful consideration of scalability, monitoring, and maintenance. This guide covers containerization strategies, orchestration with Kubernetes, and monitoring approaches for ML systems...",
      date: "July 2024",
      category: "Machine learning",
      readTime: "14 min read",
      image: "https://via.placeholder.com/400x250/be185d/ffffff?text=ML+Production",
      featured: false
    }
  ]

  const categories = ['all', 'featured', 'DSA', 'System design', 'operating system', 'AI and AI agents', 'machine learning', 'Python', 'Rust', 'Mojo']

  const filteredPosts = activeFilter === 'all'
    ? blogPosts
    : activeFilter === 'featured'
    ? blogPosts.filter(post => post.featured)
    : blogPosts.filter(post => post.category === activeFilter)

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <h2>Technical Blog</h2>
          <p>Insights and experiences from my journey in software engineering and AI</p>
        </div>

        <div className="blog-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                {post.featured && (
                  <div className="featured-badge">
                    Featured
                  </div>
                )}
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-actions">
                  <button className="btn btn-primary">Read More</button>
                  <button className="btn btn-secondary">Share</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <p>Interested in technical content and insights?</p>
          <Link to="/#contact" className="btn btn-primary">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
