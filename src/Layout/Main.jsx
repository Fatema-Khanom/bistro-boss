import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Component/Shared/Navbar';
import Footer from '../Component/Shared/Footer';

const Main = () => {
    const location = useLocation();
        console.log(location);
        const noHeaderFooter= location.pathname.includes('/login')|| location.pathname.includes('/signup')
    return (
        <div>
            {noHeaderFooter|| <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter||<Footer></Footer>}
        </div>
    );
};

export default Main;