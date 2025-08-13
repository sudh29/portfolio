import React from 'react'
import { Link } from 'react-router-dom'
import { blogData } from '../data/blogData'
import './Blog.css'

const Blog: React.FC = () => {
  const categories = Object.values(blogData);

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <h2>Cloud & Clear</h2>
          <p>Demystifying Tech, One Post at a Time</p>
          <p>Choose a category to see the list of articles.</p>
        </div>

        <div className="category-grid">
          {categories.map(category => (
            <Link key={category.slug} to={`/portfolio/blog/${category.slug}`} className="category-tile">
              <h3>{category.name}</h3>
              <p>{category.posts.length} {category.posts.length === 1 ? 'Article' : 'Articles'}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Blog
