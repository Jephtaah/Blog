import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <FaExclamationTriangle className="not-found-icon" />
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="home-link">
          <FaHome className="home-icon" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;