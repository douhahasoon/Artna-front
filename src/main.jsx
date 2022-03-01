import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Gallery from './Pages/Gallery';
import CheckOut from './Pages/CheckOut';
import ProductDetails from './Pages/ProductDetails';
import Blog from './Pages/Blog';
import MyModal from './Pages/MyModal'
import Loader from './components/Loader/Loader';
const LazyAboutUs = lazy(() => import('./Pages/AboutUs'))
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import LogInPage from './Pages/LogInPage'
// import ShoppingCart from './Pages/ShoppingCart'
 



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes> 
    <Route path="/" element={<App />}/>
    <Route path="CheckOut" element={<CheckOut/>}/>
    <Route path="Gallery" element={<Gallery/>} />
    <Route path="ProductDetails" element={<ProductDetails/>} />
    <Route path="Blog" element={<Blog/>} />
    <Route path="MyModal" element={<MyModal/>} />
    <Route path="AboutUs" element={<Suspense fallback= {<Loader />} > 
      <LazyAboutUs/> </Suspense>} />
    <Route path="signup" element={<Signup/>} />
    <Route path="login" element={<Login/>} />
    <Route path="LogInPage" element={<LogInPage/>} />
    {/* <Route path="ShoppingCart" element={<ShoppingCart/>} /> */}

    <Route/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
)



