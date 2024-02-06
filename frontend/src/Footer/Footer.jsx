import React from 'react';
import facebook from "../images/facebook.png"
import insta from "../images/insta.png"
import twitter from "../images/twitter.png"
import pinterest from "../images/pinterest.png"


const Footer = () => {
    return (
        <div className='grid grid-cols-2 w-full h-[300px] bg-[#f8f8f8] pt-14' >
            <div className='flex items-center justify-center'>
                <p className='px-3'>Blog</p>
                <p  className='px-3'>FAQs</p>
                <p  className='px-3'>Contact us</p>
            </div>
            <div className='flex items-center justify-center'>
            <img className='w-8 h-6 px-2' src={facebook} alt="facebook" />
            <img className='w-8 h-6 px-2' src={twitter} alt="twitter" />
            <img className='w-8 h-6 px-2' src={insta} alt="instagram" />
            <img className='w-8 h-6 px-2' src={pinterest} alt="pinterest" />
            </div>
            <div className='flex items-center justify-center col-span-2'>
                <p>©2024 All Rights Reserved. This project is made with by <span className=' text-red-500'>Mustapha & Sofiane </span> </p>
            </div>
            
        </div>
    );
};

export default Footer;