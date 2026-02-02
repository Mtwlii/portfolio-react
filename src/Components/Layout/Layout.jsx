import React from 'react'
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

const Layout = () => {
  return (
    <div className='vh-100'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout
