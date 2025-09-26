import { Link } from "react-router-dom";
import { FaCalendar, FaArrowRight } from "react-icons/fa";
import dayjs from "dayjs";
import "./BlogList.css";

function BlogList({ posts }) {
  const formatDate = (dateString) => {
    return dayjs(dateString).format("MMMM D, YYYY");
  };

  return (
    <div className="blog-list">
      <h1>Latest Blog Posts</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
