// src/sections/About.js
import React from 'react';
import DoubleHeading from './DoubleHeading';
import IconBox from './IconBox';
import { BiBriefcase } from 'react-icons/bi';
import { FaGraduationCap } from 'react-icons/fa';

function Experience() {
  return (
    <section id="experience">
      <DoubleHeading
        first='My'
        second='Experience'
      />
      {/* <div className='flex'>
        <div className='w-2/5 m-10'>
          <IconBox icon={<FaGraduationCap />} Date="2022" Role="Matriculation" Desc="I AM Passed Matriculation from Kashmir Model High School Lahore " />
          <IconBox icon={<FaGraduationCap />} Date="2024" Role="Intermediate (ICS)" Desc="Passed Intermediate in ICS PHY from Govt College of Science Wahdat Road Lahore" />
          <IconBox icon={<FaGraduationCap />} Date="2024" Role="BS Computer Science" Desc="Started Journey in Field Of Bachelor in Computer Science From Punjab University Lahore" />
        </div>
        <div className='w-2/5 m-10'>
          <IconBox icon={<BiBriefcase />} Date="2022" Role="Website Developer - ZumarLaw Firm" Desc="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit," />
          <IconBox icon={<BiBriefcase />} Date="2024" Role="Intermediate (ICS)" Desc="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit," />
          <IconBox icon={<BiBriefcase />} Date="2024" Role="BS Computer Science" Desc="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit," />
        </div>
      </div> */}
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="w-3/4 lg:w-2/5 m-5">
          <IconBox icon={<FaGraduationCap />} Date="2022" Role="Matriculation" Desc="I AM Passed Matriculation from Kashmir Model High School Lahore" />
          <IconBox icon={<FaGraduationCap />} Date="2024" Role="Intermediate (ICS)" Desc="Passed Intermediate in ICS PHY from Govt College of Science Wahdat Road Lahore" />
          <IconBox icon={<FaGraduationCap />} Date="2024" Role="BS Computer Science" Desc="Started Journey in Field Of Bachelor in Computer Science From Punjab University Lahore" />
        </div>
        <div className="w-3/4 lg:w-2/5 m-5">
          <IconBox icon={<BiBriefcase />} Date="2022" Role="Website Developer - ZumarLaw Firm" Desc="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit," />
          <IconBox icon={<BiBriefcase />} Date="2024" Role="Intermediate (ICS)" Desc="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit," />
          <IconBox icon={<BiBriefcase />} Date="2024" Role="BS Computer Science" Desc="Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit," />
        </div>
      </div>



    </section>
  );
}

export default Experience;
