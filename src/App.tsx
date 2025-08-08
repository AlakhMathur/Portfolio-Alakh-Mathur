import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import CustomCursor from './components/CustomCursor';
import useActiveSection from './hooks/useActiveSection';

function App() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Navigation activeSection={activeSection} />
      <Hero />
      <Experience />
      <Projects />
      <Blog />
      <Education />
      <Achievements />
      <Skills />
    </div>
  );
}

export default App;