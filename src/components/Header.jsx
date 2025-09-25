import { Link } from 'react-router-dom';
import { FaBlog } from 'react-icons/fa';
import './Header.css';

function Header() {


  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <FaBlog className="logo-icon" />
            <span>React Blog</span>
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Header;