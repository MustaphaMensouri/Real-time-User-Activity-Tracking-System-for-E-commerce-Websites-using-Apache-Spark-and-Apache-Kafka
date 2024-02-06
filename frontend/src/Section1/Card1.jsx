import React from 'react';

const Card1 = ({image, label}) => {
    const backgroundStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return (
        <div className="flex relative hover:scale-105 transition-all bg-[#f8f8f8] justify-center items-center mx-3 sm:mx-8 w-[200px] h-[100px] sm:w-[235px]  sm:h-[135px] md:w-[270px]  md:h-[170px] lg:w-[300px]  lg:h-[200px]" style={backgroundStyle}>
            <p className=' bg-white w-[80%] sm:w-[60%] text-center py-1 z-10 absolute uppercase text-[10px] md:text-sm lg:text-base xl:text-lg rounded-sm'>{label}</p>
        </div>
    );
};

export default Card1;