import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/Home/LeftAside';
import RightAside from '../Components/Home/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <nav className='items-center mb-6 w-10/12 mx-auto'>
                <Navbar></Navbar>
            </nav>
            <main className='w-10/12 mx-auto my-5 gap-5 grid grid-cols-12'>
                <aside className='col-span-3 h-fit top-5 sticky'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 h-fit top-5 sticky'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;