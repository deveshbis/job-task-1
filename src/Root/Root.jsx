import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import useAuth from '../Hooks/useAuth';

const Root = () => {
    const { user } = useAuth()
    return (
        <div>
            {user && <Navbar></Navbar>}
            <Outlet></Outlet>
            {user && <Footer></Footer>}
        </div>
    );
};

export default Root;