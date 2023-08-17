import React from 'react';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faSpinner } from '@fortawesome/free-solid-svg-icons';

//Videos
import simplebudgetPreview from '../../videos/simplebudget.mp4';
import sharenotesPreview from '../../videos/sharenotes.mp4';
import walkbuddyPreview from '../../videos/walkbuddy.mp4';
import portfolioPreview from '../../videos/portfolio.mp4';

//Styles
import './projects.css';

const Projects = () => {
  return (
    <section id="projects">
      <h3 className='section-title'>Projects</h3>
      <h3 className='section-subtitle'>My Creative Endeavors</h3>

      <div className='pr-card'>
        <div className='pr-card__demo'>
          <video src={simplebudgetPreview} controls autoplay loop></video>
        </div>
        <div className='pr-card__text-container'>
          <div className='pr-card__title'>SimpleBudget</div>
          <div className='pr-card__description'>A React app that allows users to track their income and spending with ease. Even offline, it offers transaction recording, advanced search, stats visualization, and priority tagging.
          </div>
          <div className='pr-card__stack'>
            <div>React</div>
            <div>Styled Components</div>
            <div>IndexedDB</div>
            <div>PWA</div>
          </div>
          <div className='pr-card__links'>
            <a href='https://github.com/tbarashkova/simplebudget' target="_blank" rel="noreferrer">Code <FontAwesomeIcon icon={faGithub} /></a>
            <a href='https://simplebudgett.netlify.app/' target="_blank" rel="noreferrer">Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
      </div>

      <div className='pr-card reversed'>
        <div className='pr-card__demo'>
          <video src={sharenotesPreview} controls autoplay loop></video>
        </div>
        <div className='pr-card__text-container'>
          <div className='pr-card__title'>ShareNotes</div>
          <div className='pr-card__description'>ShareNotes is a service for quick writing and sharing notes via link.
            Users can create a note, send a link to the note to the addressee. Notes are fetched from the MySQL database and are automatically removed after being read.</div>
          <div className='pr-card__stack'>
            <div>React</div>
            <div>Bootstrap</div>
            <div>MySQL</div>
          </div>
          <div className='pr-card__links'>
            <a href='https://github.com/tbarashkova/sharenotes/' target="_blank" rel="noreferrer">Code <FontAwesomeIcon icon={faGithub} /></a>
            <a href='http://185.69.154.128/' target="_blank" rel="noreferrer">Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
      </div>

      <div className='pr-card'>
        <div className='pr-card__demo'>
          <video src={portfolioPreview} controls autoplay loop></video>
        </div>
        <div className='pr-card__text-container'>
          <div className='pr-card__title'>Portfolio</div>
          <div className='pr-card__description'>A showcase of my projects and skills. Navigate through various projects, and experience the practicality of theme switching and color customization options.</div>
          <div className='pr-card__stack'>
            <div>React</div>
            <div>Vanilla CSS</div>
          </div>
          <div className='pr-card__links'>
            <a href='https://github.com/tbarashkova/portfolio' target="_blank" rel="noreferrer">Code <FontAwesomeIcon icon={faGithub} /></a>
            <a href='#home' target="_blank" rel="noreferrer">Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
      </div>

      <div className='pr-card reversed'>
        <div className='pr-card__demo'>
          <video src={walkbuddyPreview} controls autoplay loop></video>
        </div>
        <div className='pr-card__text-container'>
          <div className='pr-card__title'>WalkBuddy</div>
          <div className='pr-card__description'>A platform connecting pet owners, helping them find companions for their furry friends to walk and play with. Users can register, chat or just browse. Coming soon – a place for pets to make pals.</div>
          <div className='pr-card__stack'>
            <div>React</div>
            <div>Bootstrap</div>
            <div>RESTful API</div>
          </div>
          <div className='pr-card__links'>
            <p>In progress <FontAwesomeIcon icon={faSpinner} /></p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Projects;
