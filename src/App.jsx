import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import PageTransition from './components/PageTransition';
import Cursor from './components/Cursor';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Sections mapping to dynamically render components
  const sections = {
    home: <Home setActiveSection={setActiveSection} />, // Pass setActiveSection here
    about: <About setActiveSection={setActiveSection} />,
    portfolio: <Portfolio setActiveSection={setActiveSection} />,
    skills: <Skills setActiveSection={setActiveSection} />,
    experience: <Experience setActiveSection={setActiveSection} />,
    contact: <Contact setActiveSection={setActiveSection} />,
  };

  // Handle section change with transition
  const handleSectionChange = (section) => {
    setIsTransitioning(true);
    setActiveSection(section);
  };

  // Stop transitioning animation
  const handleAnimationEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="App">
      <div className='custom-scrollbar '>


        <Navbar activeSection={activeSection} setActiveSection={handleSectionChange} />

        {isTransitioning ? (
          <PageTransition onAnimationEnd={handleAnimationEnd}>
            <h2 className="text-white">Loading...</h2>
          </PageTransition>
        ) : (
          sections[activeSection] || sections.home
        )}
        <Cursor />
      </div>
    </div>
  );
}

export default App;
