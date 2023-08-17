import React from 'react';

// Images

import emoji from '../../images/about-emoji.png';
import dev from '../../images/about-image.svg'

//Styles
import './about.css';

const About = () => {
  return (
    <section id="about">
      <div className='imgs-container'>
        <img src={dev} alt="Front-end developer" className='about-dev' />
        <img src={emoji} alt="emoji" className='about-emoji' />
      </div>

      <div className='text-container'>
        <h3 className='section-title'>About me</h3>
        <h3 className='section-subtitle'>A dedicated Front-end Developer based in Prague, Czech Republic 📍</h3>
        <div className='section-description about-description'>
          <p>As an enthusiastic Junior Front-end Developer, I bring a versatile skill set to the table, including expertise in HTML, CSS, JavaScript, React, Bootstrap, React Bootstrap, Styled components. With a love for problem-solving and an eye for design, I excel at creating and maintaining responsive websites that offer a seamless user experience.</p>

          <p>My strong team spirit and collaboration skills combined with ability to perform as both a leader and a follower is what sets me apart. I thrive in cross-functional environments, working alongside fellow professionals to create exceptional web applications. My dedication, collaboration and eagerness to learn make me a valuable asset to any project.</p>

          <p>Thank you for visiting my portfolio, and I look forward to sharing my creations with you!</p>
        </div>
      </div>
    </section >
  );
};

export default About;
