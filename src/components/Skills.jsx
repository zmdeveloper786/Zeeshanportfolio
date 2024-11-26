// src/sections/About.js
import React from 'react';
import CircleProgressBar from './CircleProgressBar';
import DoubleHeading from './DoubleHeading';
function Skills() {
  return (
    <section id="Skills">
      <DoubleHeading
        first='My'
        second='SKills'
        back='Learn'
      />
      <div className="w-full  mx-auto my-10 flex flex-wrap justify-evenly">
        <div className="w-full mb-5 sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <CircleProgressBar progress={90} text="HTML" />
        </div>
        <div className="w-full mb-5 sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <CircleProgressBar progress={80} text="CSS" />
        </div>
        <div className="w-full mb-5 sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <CircleProgressBar progress={80} text="Bootstrap" />
        </div>
        <div className="w-full mb-5 sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <CircleProgressBar progress={75} text="Tailwind CSS" />
        </div>
      </div>
      <div className="w-full  mx-auto my-10 flex flex-wrap justify-evenly">
        <div className="w-full mb-5 sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <CircleProgressBar progress={80} text="JavaScript" />
        </div>
        <div className="w-full mb-5 sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <CircleProgressBar progress={70} text="React JS" />
        </div>
        <div className="w-full mb-5 sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <CircleProgressBar progress={70} text="Next JS" />
        </div>
        <div className="w-full mb-5 sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <CircleProgressBar progress={85} text="Node JS" />
        </div>
      </div>
      <div className="w-full mx-auto my-10 flex flex-wrap justify-evenly">
        <div className="w-full mb-5 sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <CircleProgressBar progress={80} text="MongoDB" />
        </div>
        <div className="w-full mb-5 sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <CircleProgressBar progress={90} text="GIT" />
        </div>
        <div className="w-full mb-5 sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <CircleProgressBar progress={90} text="GitHub" />
        </div>
        <div className="w-full mb-5 sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <CircleProgressBar progress={60} text="GSAP" />
        </div>
      </div>

    </section>
  );
}

export default Skills;
