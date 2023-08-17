import React from 'react';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

//Styles
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h3 className='section-title'>Contact</h3>
      <h3 className='section-subtitle'>Let's Connect! 👇</h3>
      <div className='contact-description'>

        <div className="contact-card">
          <div className='contact-icons'><FontAwesomeIcon icon={faEnvelope} /></div>
          <div className='contact-text'>
            <p>Email</p>
            <a href='mailto:tetiana.barashkova.dev@gmail.com'>tetiana.barashkova.dev@gmail.com</a>
          </div>
        </div>

        <div className="contact-card">
          <span className='contact-icons'><FontAwesomeIcon icon={faLinkedin} /></span>
          <div className='contact-text'>
            <p>LinkedIn</p>
            <a href='https://www.linkedin.com/in/tetiana-barashkova/' target="_blank" rel="noopener noreferrer">tetiana.barashkova</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
