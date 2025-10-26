import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mb-15'>
            <div></div>
            <div className='nav gap-5 flex text-gray-500 font-semibold text-lg'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/carreer">Carreer</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img src={user} alt="" />
                <button className='btn px-10 bg-[#403F3F] text-white font-bold'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;