import React from "react";

const PortfolioCard = ({ image, text, link }) => {
    return (
        // <div className="relative group w-64 overflow-hidden rounded-lg">
        //     {/* Overlay */}
        //     <div
        //         className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-100 translate-y-[100%] group-hover:translate-y-0 transition-all duration-500 ease-in-out flex items-center justify-center"
        //     >
        //         {/* Text */}
        //         <span className="text-white text-lg font-semibold">{text}</span>
        //     </div>

        //     <a target="_blank" href={link}>
        //         {/* Image */}
        //         <img
        //             src={image}
        //             width={280}
        //             alt="Portfolio"
        //             className="relative"
        //         />

        //         {/* Overlay */}
        //         <div
        //             className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease-in-out flex items-center justify-center"
        //         >
        //             {/* Text */}
        //             <span className="text-white text-lg font-semibold">{text}</span>
        //         </div>
        //     </a>
        // </div>



        <div className="relative group w-64 sm:w-48 md:w-56 lg:w-64 overflow-hidden rounded-lg">
    {/* Overlay */}
    <div
        className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out flex items-center justify-center"
    >
        {/* Text */}
        <span className="text-white text-sm sm:text-base md:text-lg font-semibold">{text}</span>
    </div>

    <a target="_blank" href={link}>
        {/* Image */}
        <img
            src={image}
            width={280}
            alt="Portfolio"
            className="w-full h-auto"
        />

        {/* Overlay */}
        <div
            className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out flex items-center justify-center"
        >
            {/* Text */}
            <span className="text-white text-sm sm:text-base md:text-lg font-semibold">{text}</span>
        </div>
    </a>
</div>

    );
};

export default PortfolioCard;
