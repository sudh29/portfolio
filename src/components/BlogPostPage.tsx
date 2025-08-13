import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import './BlogPostPage.css';

const BlogPostPage: React.FC = () => {
  const { categorySlug, postSlug } = useParams<{ categorySlug: string; postSlug: string }>();

  const category = categorySlug ? blogData[categorySlug] : undefined;
  const post = category?.posts.find(p => p.slug === postSlug);

  if (!category || !post) {
    return (
      <div className="container">
        <h2>Post not found</h2>
        <p>The blog post you're looking for does not exist.</p>
        <Link to="/portfolio/blog">Back to Blog Categories</Link>
      </div>
    );
  }

  return (
    <article className="blog-post-page">
      <div className="container">
        <div className="post-navigation">
          <Link to="/portfolio/blog" className="back-to-blog">
            ← Back to Blog
          </Link>
          <Link to={`/portfolio/blog/${category.slug}`} className="back-to-category">
            ← Back to {category.name}
          </Link>
        </div>
        
        <div className="post-category-info">
          <p>In category: <Link to={`/portfolio/blog/${category.slug}`}>{category.name}</Link></p>
        </div>
        
        <div 
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
      </div>
    </article>
  );
};

export default BlogPostPage;
