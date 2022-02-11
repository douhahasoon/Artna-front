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
<<<<<<< HEAD
import Loader from './components/Loader/Loader';
// import AboutUs from './Pages/AboutUs';
const LazyAboutUs = lazy(() => import('./Pages/AboutUs'))

=======
import AboutUs from './Pages/AboutUs';
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
>>>>>>> 9a919ff013bf3c8c84c1af1c97727670d61a00c1
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
<<<<<<< HEAD
    <Route path="AboutUs" element={<Suspense fallback= {<Loader />} > 
      <LazyAboutUs/> </Suspense>} />

=======
    <Route path="AboutUs" element={<AboutUs/>} />
    <Route path="signup" element={<Signup/>} />
    <Route path="login" element={<Login/>} />
>>>>>>> 9a919ff013bf3c8c84c1af1c97727670d61a00c1
    <Route/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
)


