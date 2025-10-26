import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col py-4 gap-2'>
            <img src={logo} alt="" />
            <p className='font-semibold text-gray-600 text-xl py-2'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-gray-500 text-lg'>
                {format(new Date(), "EEEE, MMMM dd, yyyy")}
            </p>

            <div className='flex gap-5 items-center my-3 w-10/12 mx-auto bg-gray-100 py-3 px-5'>
                <p className='text-gray-200 font-bold text-lg bg-red-600 py-2 px-7'>Latest</p>
                <Marquee className='flex gap-5' pauseOnHover={true}>
                    <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, enim.</p>
                    <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, enim.</p>
                    <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, enim.</p>
                </Marquee>
            </div>
        </div>    
    );
};

export default Header;