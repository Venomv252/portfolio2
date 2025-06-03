import { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'projects' },
    { id: 4, link: 'contact' }
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <h1 className="nav-logo">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                to={link}
                smooth
                duration={500}
                className="nav-link"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={handleClick}
          className="nav-menu-button"
          aria-label="Toggle menu"
        >
          {nav ? (
            <XMarkIcon className="nav-icon" />
          ) : (
            <Bars3Icon className="nav-icon" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${nav ? 'active' : ''}`}>
        {links.map(({ id, link }) => (
          <Link
            key={id}
            to={link}
            smooth
            duration={500}
            onClick={handleClick}
            className="mobile-link"
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 