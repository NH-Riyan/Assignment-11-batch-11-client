import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='w-10/12 mx-auto min-h-screen flex flex-col'>
            <Navbar></Navbar>
            <div className="flex-grow mt-10 mb-20">
                <Outlet />
            </div>
            <footer className=" bg-base-200">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;