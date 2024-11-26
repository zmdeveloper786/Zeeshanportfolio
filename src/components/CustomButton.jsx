import React from 'react';
const CustomButton = ({ text, onClick, theme,buttonicon }) => {
  return (
    <button
      onClick={onClick} // Attach the onClick handler here
      className={`icon-wrapper ${theme === 'dark' ? 'bg-black' : 'bg-black'
        }  rounded-full z-10 relative flex justify-center items-center border-2 border-[#ffb400] 
      pl-5 cursor-pointer overflow-hidden transition-colors duration-300 group`}
    >
      <span className="text-white text-lg py-2 pl-3 z-10 transition-colors duration-300">
        {text}
      </span>
      <span className="absolute top-0 right-5 h-full w-0 bg-yellow-500 transition-all z-0 duration-500 group-hover:w-full"></span>


      <div className='relative group'>
        <div className='bg-yellow-500 rounded-full p-5 ml-3'>
          {buttonicon}
        </div>

      </div>

    </button>
  );
};

export default CustomButton;



