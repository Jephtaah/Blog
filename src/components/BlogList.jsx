import { Link } from 'react-router-dom';
import { FaCalendar, FaArrowRight } from 'react-icons/fa';
import './BlogList.css';

function BlogList({ posts }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-list">
      <h1>Latest Blog Posts</h1>
      <div className="posts-grid">
        {posts.map(post => (
          <article key={post.id} className="post-card">
            <div className="post-meta">
              <FaCalendar className="calendar-icon" />
              <span className="post-date">{formatDate(post.date)}</span>
            </div>

            <h2 className="post-title">
              <Link to={`/post/${post.id}`} className="post-title-link">
                {post.title}
              </Link>
            </h2>

            <p className="post-excerpt">{post.excerpt}</p>

            <Link to={`/post/${post.id}`} className="read-more">
              Read more <FaArrowRight className="arrow-icon" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogList;