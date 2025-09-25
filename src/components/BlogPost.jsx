import { useParams, Link, Navigate } from 'react-router-dom';
import { FaCalendar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './BlogPost.css';

function BlogPost({ posts }) {
  const { id } = useParams();
  const postId = parseInt(id);

  const post = posts.find(p => p.id === postId);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const currentIndex = posts.findIndex(p => p.id === postId);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="blog-post">
      <Link to="/" className="back-link">
        <FaArrowLeft className="back-icon" />
        Back to Home
      </Link>

      <header className="post-header">
        <div className="post-meta">
          <FaCalendar className="calendar-icon" />
          <span className="post-date">{formatDate(post.date)}</span>
        </div>
        <h1 className="post-title">{post.title}</h1>
      </header>

      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

      <nav className="post-navigation">
        <div className="nav-links">
          {prevPost && (
            <Link to={`/post/${prevPost.id}`} className="nav-link prev-link">
              <FaArrowLeft className="nav-icon" />
              <div className="nav-text">
                <span className="nav-label">Previous</span>
                <span className="nav-title">{prevPost.title}</span>
              </div>
            </Link>
          )}

          {nextPost && (
            <Link to={`/post/${nextPost.id}`} className="nav-link next-link">
              <div className="nav-text">
                <span className="nav-label">Next</span>
                <span className="nav-title">{nextPost.title}</span>
              </div>
              <FaArrowRight className="nav-icon" />
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}

export default BlogPost;