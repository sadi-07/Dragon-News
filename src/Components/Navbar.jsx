import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import user from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const {user, logOut} = use(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert("Logget Out Successfully!")
            })
            .catch(error => {
                console.log(error.message)
            })
    };
    return (
        <div className='flex justify-between items-center mb-15'>
            <div>{user && user.email}</div>
            <div className='nav gap-5 flex text-gray-500 font-semibold text-lg'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/carreer">Carreer</NavLink>
            </div>
            <div className='login-btn flex gap-5'>
                <img src={user} alt="" />
                {
                    user ? <button onClick={handleLogOut} className='btn px-10 bg-[#403F3F] text-white font-bold'>Log Out</button> : (<Link to="/auth/login" className='btn px-10 bg-[#403F3F] text-white font-bold'>Login</Link>)
                }
                
            </div>
        </div>
    );
};

export default Navbar;