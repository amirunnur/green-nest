import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Login from '../Auth/Login';


const MainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
           
            
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;