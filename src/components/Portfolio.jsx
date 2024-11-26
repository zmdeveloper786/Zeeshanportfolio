// src/sections/About.js
import React from 'react';
import DoubleHeading from './DoubleHeading';
import PortfolioCard from './PortfolioCard';
import portfolio1 from '../assets/images/portfolio mockup/Mockup (1).jpg';
import portfolio2 from '../assets/images/portfolio mockup/Mockup (6).jpg';
import portfolio3 from '../assets/images/portfolio mockup/Mockup (4).jpg';

function Portfolio() {
  return (
    <section id="Portfolio">
      <DoubleHeading
        first='My'
        second='Portfolio'
        back='Works'
      />
      <div className="mt-10">
        <div className="flex flex-wrap w-11/12 items-center justify-center gap-10 mx-auto mb-10">
          <PortfolioCard image={portfolio1} text="Home Shine Welfare" link="https://www.swfpakistan.com" />
          <PortfolioCard image={portfolio2} text="BuySamaan" link="https://www.buysamaan.com" />
          <PortfolioCard image={portfolio3} text="Zumar law Firm" link="https://www.zumarlawfirm.com" />
        </div>

        <div className="flex flex-wrap w-11/12 items-center justify-center gap-10 mx-auto mb-10">
          <PortfolioCard image={portfolio1} text="Home Shine Welfare" link="https://www.swfpakistan.com" />
          <PortfolioCard image={portfolio2} text="BuySamaan" link="https://www.buysamaan.com" />
          <PortfolioCard image={portfolio3} text="Zumar law Firm" link="https://www.zumarlawfirm.com" />
        </div>

        <div className="flex flex-wrap w-11/12 items-center justify-center gap-10 mx-auto mb-10">
          <PortfolioCard image={portfolio1} text="Home Shine Welfare" link="https://www.swfpakistan.com" />
          <PortfolioCard image={portfolio2} text="BuySamaan" link="https://www.buysamaan.com" />
          <PortfolioCard image={portfolio3} text="Zumar law Firm" link="https://www.zumarlawfirm.com" />
        </div>
      </div>

    </section>
  );
}

export default Portfolio;
