// src/sections/About.js
import React from 'react';
import DoubleHeading from './DoubleHeading';
import PersonalInfo from './PersonalInfo';
function About() {
  return (
    <section id="about">
      <DoubleHeading 
      first='About'
      second='Me'
      back='Resume'
      />
      <PersonalInfo/>
    </section>
  );
}

export default About;
