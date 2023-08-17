import React, { useState } from 'react';
import { Link } from 'react-scroll';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';

//Styles
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links__logo">
          <Link to="home" smooth={true} duration={500}>TB</Link>
        </div>

        <ul className='navbar-links__container'>
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>

      {/* MOBILE */}
      <div className="navbar-menu">
        {toggleMenu
          ? <FontAwesomeIcon icon={faXmark} onClick={() => setToggleMenu(false)} />
          : <FontAwesomeIcon icon={faBarsStaggered} onClick={() => setToggleMenu(true)} />}

        {toggleMenu && (
          <div className="navbar-menu__container scale-up-center">
            <ul className="navbar-menu__container-links">
              <li>
                <Link to="home" smooth={true} duration={500}>Home</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>About</Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
