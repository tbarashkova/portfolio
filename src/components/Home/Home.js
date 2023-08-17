import React from 'react';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faHtml5, faCss3Alt, faJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';

//Styles
import './home.css';

const Home = () => {
  return (
    <section id='home'>

      <div className="home-main">

        <div className='home-txt'>
          <h1 className='home-txt__title'>Front-end (React) Developer</h1>
          <p className='home-txt__description'>Hello there, I'm <span>Tetiana Barashkova</span>, a passionate Front-end (React) Developer ready to bring creativity and functionality to life through code.</p>
          <div className='home-txt__icons'>
            <a href='https://github.com/tbarashkova' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href='https://www.linkedin.com/in/tetiana-barashkova/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
        <div className="home-image__container">
          <div className='home-image'></div>
        </div>

      </div>

      <div className='home-stack'>
        <div className='home-stack__txt'>Tech Stack</div>
        <div className='home-stack__icons'>
          <FontAwesomeIcon icon={faHtml5} style={{ color: "#ff5900", }} title='HTML5' />
          <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#0219f3", }} title='CSS3' />
          <FontAwesomeIcon icon={faJs} style={{ color: "#ffdf00", }} title='JavaScript' />
          <FontAwesomeIcon icon={faReact} style={{ color: "#5adafd", }} title='React' />
          <FontAwesomeIcon icon={faBootstrap} style={{ color: "#6610f2", }} title='Bootstrap' />
          <svg className="home-stack__react-bs"><title className='tooltip'>ReactBootstrap</title></svg>
          <svg className="home-stack__styled-components"><title>Styled components</title></svg>
        </div>
      </div>
    </section>
  );
};

export default Home;
