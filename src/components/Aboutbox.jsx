import React from 'react'

const Aboutbox = (props) => {
    return (
        <>
            <div className="w-1/2 px-4">
                <div className="pt-5 pb-5 border border-white border-opacity-10 rounded mb-6">
                    <h3 className="relative inline-block ml-7 font-bold text-5xl text-yellow-500 leading-tight after:content-['+'] after:absolute after:-right-6 after:text-3xl after:font-light after:top-1">{props.years}</h3>
                    <p className="relative text-white ml-10 text-lg uppercase pl-0 before:hidden font-sans font-medium before:absolute before:left-0 before:top-3 before:w-8 before:h-1 before:bg-white">
                        {props.description}
                        <span className="block">{props.desc2}</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Aboutbox
