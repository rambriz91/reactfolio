import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul>
        <li>
          <Link to='/' className={currentPage === '/' ? 'glow' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link
            to='/Portfolio'
            className={currentPage === '/Portfolio' ? 'glow' : ''}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to='/Contact'
            className={currentPage === '/Contact' ? 'glow' : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to='/Resume'
            className={currentPage === '/Resume' ? 'glow' : ''}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
