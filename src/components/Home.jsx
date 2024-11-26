


// import React from 'react';
// import image from '../assets/images/bg.png';
// import CarouselHeading from './CarouselHeading';
// import CustomButton from './CustomButton';
// import { BsArrowReturnLeft } from 'react-icons/bs';

// function Home({ setActiveSection }) {
//   return (
//     <section id="home" className="bg-black flex justify-center items-center min-h-screen px-4">
//       <div className="flex justify-center items-center px-4 h-full">
//         <div className="flex w-full max-w-6xl justify-between items-center">
//           <div className="w-2/5 h-80 flex justify-center">
//             <div className={`bg-gray-500 rounded w-3/6 flex justify-center`}>
//               <img
//                 src={image}
//                 height="auto"
//                 width="auto"
//                 alt="Description"
//                 className="w-full max-w-xs h-auto"
//               />
//             </div>
//           </div>

//           {/* Right Column: Heading, Description, Button */}
//           <div className="w-3/5 px-6 text-left">
//             <h1 className={`text-5xl text-yellow-500 font-semibold mb-4`}>
//               Muhammad Zeeshan
//             </h1>
//             <CarouselHeading />
//             <p className="text-lg mb-6 text-justify mt-5 text-white w-5/6">
//               I'm a web designer & full-stack developer focused on crafting clean & user‑friendly experiences.
//               I am passionate about building excellent software that improves the lives of those around me.
//             </p>

//             <CustomButton
//               buttonicon={<BsArrowReturnLeft />}
//               key="about"
//               text="More About Me"
//               onClick={() => setActiveSection('about')} // Use setActiveSection here
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;
import React from 'react';
import image from '../assets/images/bg.png';
import CarouselHeading from './CarouselHeading';
import CustomButton from './CustomButton';
import { BsArrowReturnLeft } from 'react-icons/bs';

function Home({ setActiveSection }) {
  return (
    <section id="home" className="bg-black flex justify-center items-center min-h-screen px-4">
      <div className="flex justify-center items-center px-4 h-full">
        <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl justify-between items-center">
          
          {/* Left Column: Image */}
          <div className="w-full md:w-2/5 h-80 flex justify-center mb-6 md:mb-0 mt-12 md:mt-0">
          <div className="bg-gray-500 rounded w-3/6 flex justify-center">
              <img
                src={image}
                height="auto"
                width="auto"
                alt="Description"
                className="w-full max-w-xs h-auto"
              />
            </div>
          </div>

          {/* Right Column: Heading, Description, Button */}
          <div className="w-full md:w-3/5 px-6 mt-10 text-left">
            <h1 className="text-4xl sm:text-5xl text-yellow-500 font-semibold mb-4">
              Muhammad Zeeshan
            </h1>
            <CarouselHeading />
            <p className="text-base sm:text-lg mb-6 text-justify mt-5 text-white w-5/6">
              I'm a web designer & full-stack developer focused on crafting clean & user‑friendly experiences.
              I am passionate about building excellent software that improves the lives of those around me.
            </p>

            <CustomButton
              buttonicon={<BsArrowReturnLeft />}
              key="about"
              text="More About Me"
              onClick={() => setActiveSection('about')} // Use setActiveSection here
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;



