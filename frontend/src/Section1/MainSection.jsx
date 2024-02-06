import React from 'react';
import image from '../images/section11.png'
import './MainSection.css';
import Card1 from './Card1';
import m from "../images/section1.png"
import m2 from "../images/image2.png"
import m3 from "../images/kids.png"

const MainSection = () => {
    return (
        <>
        <div className='bg-[#f8f8f8] w-full h-[70vh] relative flex items-center section'>
            <div className='xl:m-[20%] 2xl:m-[30%] z-10 lg:m-[10%] sm:m-[7%] m-[5%]'>
                <h4 className='mb-3 text-xs sm:mb-4 sm:text-sm md:text-base lg:mb-5 lg:text-lg'>SPRING/SUMMER COLLECTION 2024</h4>
                <h1 className=' mb-7 w-[80%] lg:w-[100%] text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-medium'>Get up to 30% Off New Arrivals</h1>
                <a href='#cards' className=" appearance-none bg-[#fc4a4e] rounded-md hover:shadow-md text-white  active:opacity-85 px-6 py-2 sm: text-xs lg:text-sm xl:text-lg">Shop Now</a>
            </div>
            <img src={image} alt="cute" className='media h-full opacity-90 absolute bottom-0 right-1 2xl:right-4' />
        </div>
        <div className='w-full h-[30vh] flex justify-center items-center'>
            <Card1 image={m} label={"Men's"} />
            <Card1 image={m2} label={"women's"} />
            <Card1 image={m3} label={"kid's"} />
        </div>
        </>
    );
};

export default MainSection;