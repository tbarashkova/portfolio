import React from 'react';
import { Element } from 'react-scroll';

//Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components//Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

const App = () => {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
};

export default App;
