"use client";

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Providers({children}) {
  return (
    <Provider store={store}>
      <NavBar/>
      <div className='children_container'>
        {children}
      </div>
      <Footer/>
    </Provider>  
  )
}
