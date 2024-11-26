// src/components/PersonalInfo.js
import React from 'react';
import CustomButton from './CustomButton';
import Aboutbox from './Aboutbox';
import { FaDownload } from 'react-icons/fa';

const PersonalInfo = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/pdf/Zeeshan Resume.pdf'; // Replace with the path to your PDF file
    link.download = 'Zeeshan Resume.pdf'; // Specify the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
   


    <div class="flex flex-wrap gap-8">
    <div class="w-full lg:basis-5/12 md:basis-7/12 sm:basis-full px-4">
        <h3 class="uppercase text-2xl md:text-xl sm:text-lg font-semibold mb-6 text-white">Personal Infos</h3>
        <div class="flex flex-wrap md:flex-nowrap gap-4">
            <div class="w-1/2 sm:w-full text-base sm:text-sm [&amp;>div]:mb-4">
                <div><span class="opacity-80 text-white">First Name: </span><span class="font-semibold text-white">Steve</span></div>
                <div><span class="opacity-80 text-white">Last Name: </span><span class="font-semibold text-white">Milner</span></div>
                <div><span class="opacity-80 text-white">Age: </span><span class="font-semibold text-white">27 Years</span></div>
                <div><span class="opacity-80 text-white">Nationality: </span><span class="font-semibold text-white">Tunisian</span></div>
                <div><span class="opacity-80 text-white">Freelance: </span><span class="font-semibold text-white">Available</span></div>
            </div>
            <div class="w-1/2 sm:w-full text-base sm:text-sm [&amp;>div]:mb-4">
                <div><span class="opacity-80 text-white">Address: </span><span class="font-semibold text-white">Tunis</span></div>
                <div><span class="opacity-80 text-white">Phone: </span><span class="font-semibold text-white">+216 21 184 010</span></div>
                <div><span class="opacity-80 text-white">Email: </span><span class="font-semibold text-white">demo@demo.com</span></div>
                <div><span class="opacity-80 text-white">Skype: </span><span class="font-semibold text-white">steve.milner</span></div>
                <div><span class="opacity-80 text-white">Languages: </span><span class="font-semibold text-white">French, English</span></div>
            </div>
        </div>
        <div className="mt-2 text-center sm:text-left">
           <CustomButton buttonicon={<FaDownload />} text="Download CV" onClick={handleDownload} />
        </div>
    </div>
    <div class="w-full xl:basis-1/2 lg:basis-7/12 down-lg:basis-full down-lg:mt-50">
        <div class="flex xl:basis-1/2 lg:basis-7/12 down-lg:basis-full down-lg:mt-50">
            <div class="w-1/2 px-4">
                <div class="pt-5 pb-5 border border-white border-opacity-10 rounded mb-6">
                    <h3 class="relative inline-block ml-7 font-bold text-5xl text-yellow-500 leading-tight after:content-['+'] after:absolute after:-right-6 after:text-3xl after:font-light after:top-1">2</h3>
                    <p class="relative text-white ml-10 text-lg uppercase pl-0 before:hidden font-sans font-medium before:absolute before:left-0 before:top-3 before:w-8 before:h-1 before:bg-white">Year Of<span class="block">Experience</span></p>
                </div>
            </div>
            <div class="w-1/2 px-4">
                <div class="pt-5 pb-5 border border-white border-opacity-10 rounded mb-6">
                    <h3 class="relative inline-block ml-7 font-bold text-5xl text-yellow-500 leading-tight after:content-['+'] after:absolute after:-right-6 after:text-3xl after:font-light after:top-1">2</h3>
                    <p class="relative text-white ml-10 text-lg uppercase pl-0 before:hidden font-sans font-medium before:absolute before:left-0 before:top-3 before:w-8 before:h-1 before:bg-white">Year Of<span class="block">Experience</span></p>
                </div>
            </div>
        </div>
        <div class="flex xl:basis-1/3 lg:basis-7/12 down-lg:basis-full down-lg:mt-50">
            <div class="w-1/2 px-4">
                <div class="pt-5 pb-5 border border-white border-opacity-10 rounded mb-6">
                    <h3 class="relative inline-block ml-7 font-bold text-5xl text-yellow-500 leading-tight after:content-['+'] after:absolute after:-right-6 after:text-3xl after:font-light after:top-1">2</h3>
                    <p class="relative text-white ml-10 text-lg uppercase pl-0 before:hidden font-sans font-medium before:absolute before:left-0 before:top-3 before:w-8 before:h-1 before:bg-white">Year Of<span class="block">Experience</span></p>
                </div>
            </div>
            <div class="w-1/2 px-4">
                <div class="pt-5 pb-5 border border-white border-opacity-10 rounded mb-6">
                    <h3 class="relative inline-block ml-7 font-bold text-5xl text-yellow-500 leading-tight after:content-['+'] after:absolute after:-right-6 after:text-3xl after:font-light after:top-1">2</h3>
                    <p class="relative text-white ml-10 text-lg uppercase pl-0 before:hidden font-sans font-medium before:absolute before:left-0 before:top-3 before:w-8 before:h-1 before:bg-white">Year Of<span class="block">Experience</span></p>
                </div>
            </div>
        </div>
    </div>
</div>


  );
};

export default PersonalInfo;
