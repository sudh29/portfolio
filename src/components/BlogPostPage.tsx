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
        <header className="post-header">
          <h1>{post.title}</h1>
          <p className="post-category">
            In category: <Link to={`/portfolio/blog/${category.slug}`}>{category.name}</Link>
          </p>
        </header>
        <div className="post-content">
          {/* This is a simple way to render content. For a real blog, you'd want a Markdown parser. */}
          {post.content.split('\\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPostPage;
