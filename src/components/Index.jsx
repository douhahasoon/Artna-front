import React from 'react'
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import Hero from './Carousal/Hero'
import Footer from './Footer/Footer'
import Buttons from './Buttons/Buttons'
import Trending from './Trending/Trending'
import Design from './Trending/Design'
import Products from './Products/Products'

export default function Index() {
    return (
        

            <div>
                    <NavBar />
                    <Home />
                  
                    <Buttons/>
                    <Trending/>
                    <Design />
                    <Products />
                    <Footer/>
                   
                    
                    


            </div>
        
    )
}
