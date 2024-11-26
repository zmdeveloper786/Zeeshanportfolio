import React from 'react';
import { BsBriefcase } from 'react-icons/bs';

function IconBox({icon,Date,Role, Desc}) {
    return (
        // <div className="text-white p-4 rounded-lg">
        //     <div className="flex justify-center items-start">
        //         <div className="bg-yellow-500 text-white text-2xl rounded-full p-3 mr-3">
        //          {icon}
        //         </div>
        //         <div>
        //             <div className="text-sm bg-gray-700 inline-block mb-3 p-1 rounded-lg ">{Date}</div>
        //             <div className='flex flex-col gap-2'>

        //                 <div className="font-bold">{Role}</div>
        //                 <p>{Desc}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="text-white p-4 rounded-lg">
    <div className="flex flex-col sm:flex-row justify-center items-start">
        <div className="bg-yellow-500 text-white text-2xl rounded-full p-3 mr-3 mb-3 sm:mb-0">
            {icon}
        </div>
        <div className="w-full sm:w-auto">
            <div className="text-sm bg-gray-700 inline-block mb-3 p-1 rounded-lg">
                {Date}
            </div>
            <div className="flex flex-col gap-2">
                <div className="font-bold">{Role}</div>
                <p>{Desc}</p>
            </div>
        </div>
    </div>
</div>

    );
}

export default IconBox;