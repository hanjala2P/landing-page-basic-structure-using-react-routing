import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../Componants/Nav';
import Footer from '../Componants/Footer';

const RootLayout = () => {
    return (
         <div>
            <Nav></Nav>
            <main className='min-h-[calc(100vh-290px)]'>
                
            <Outlet/>
            </main>
           < Footer/>

        </div>
    );
};

export default RootLayout;