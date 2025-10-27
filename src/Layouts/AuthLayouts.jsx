import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayouts = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <div className='py-5 w-10/12 mx-auto'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;