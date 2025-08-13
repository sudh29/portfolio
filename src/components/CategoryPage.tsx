import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import './CategoryPage.css';

const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categorySlug ? blogData[categorySlug] : undefined;

  if (!category) {
    return (
      <div className="container">
        <h2>Category not found</h2>
        <p>The category you're looking for does not exist.</p>
        <Link to="/portfolio/blog">Back to Blog Categories</Link>
      </div>
    );
  }

  return (
    <section className="category-page">
      <div className="container">
        <div className="section-header">
          <h2>{category.name}</h2>
          <p>A collection of articles on {category.name}.</p>
        </div>

        <div className="post-list">
          {category.posts.length > 0 ? (
            category.posts.map(post => (
              <div key={post.slug} className="post-list-item">
                <h3>
                  <Link to={`/portfolio/blog/${category.slug}/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p>{post.excerpt}</p>
                <Link to={`/portfolio/blog/${category.slug}/${post.slug}`} className="btn btn-secondary">
                  Read More
                </Link>
              </div>
            ))
          ) : (
            <p>No articles in this category yet. Please check back later!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
