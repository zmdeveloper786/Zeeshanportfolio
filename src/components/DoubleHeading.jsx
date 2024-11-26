import React from 'react';

const DoubleHeading = (props) => {
    return (
        <div className="mx-auto w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 relative py-10 sm:py-14 md:py-20 text-center  top-0 z-20">
            <h2 className="left-0 right-0 relative text-3xl sm:text-4xl md:text-5xl font-black font-Poppins uppercase text-white m-0 leading-tight sm:leading-snug text-center sm:text-center">
                {props.first} <span className="text-yellow-500">{props.second}</span>
            </h2>
            <span className="text-5xl sm:text-7xl md:text-9xl right-0 left-0 mx-auto absolute top-1/2 tracking-wide leading-none font-extrabold text-opacity-20 text-gray-400 -translate-y-1/2 uppercase">
                {props.back}
            </span>
        </div>

    );
}

export default DoubleHeading;
