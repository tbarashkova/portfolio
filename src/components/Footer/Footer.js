import React from 'react';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

//Styles
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer-icons'>
        <a href='https://github.com/tbarashkova' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
        <a href='https://www.linkedin.com/in/tetiana-barashkova/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </footer>
  );
};

export default Footer;
