import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Landing Page/home/Homepage';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from "./Landing Page/signup/Signup"
import AboutPage from "./Landing Page/about/AboutPage"
import ProductsPage from './Landing Page/products/ProductsPage';
import SupportPage from './Landing Page/support/SupportPage';
import Navbar from './Landing Page/Navbar';
import Footer from './Landing Page/Footer';
import NotFound from './Landing Page/NotFound';
import PricingPage from './Landing Page/pricing/PricingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// {/* <React.StrictMode>
//         <Homepage/>
// </React.StrictMode> */}
<BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>      
          <Route path="/signup" element={<Signup/>}/>      
          <Route path="/about" element={<AboutPage/>}/>      
          <Route path="/product" element={<ProductsPage/>}/>      
          <Route path="/pricing" element={<PricingPage/>}/>      
          <Route path="/support" element={<SupportPage/>}/>      
          <Route path="*" element={<NotFound/>}/>      
        </Routes>
        <Footer/>
</BrowserRouter>
);