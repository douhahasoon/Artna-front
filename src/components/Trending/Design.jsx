import React from 'react'

import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';


export default function Design() {
    return (
        <Carousel
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        swipeable={true}
        showStatus={false}
>
        <div> 
        <div className="pt-14"> 
    
        <h1 className="antialiased  text-left pl-16  font-serif font-semibold text-3xl">Designs Picked For you</h1>
       

        </div>
        
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  gap-2 pl-16 pr-6  pt-16">
            <Link to="/gallery"> 
            
            <div className="w-full relative">
                <div className="absolute w-full h-full
                 bg-white opacity-20"></div>
                <img className="bg-no-repeat bg-cover" 
                 src="./src/Images/DesignPicked/vv.png"/>
            </div>
            </Link>
            <div className="w-full relative"> 
            <div className="absolute w-full h-full
                 bg-white opacity-20"></div>
            <img  className="bg-no-repeat bg-cover" 
            src="./src/Images/DesignPicked/vvv.png"/>
            </div>
            <div className="w-full relative">
            <div className="absolute w-full h-full
                 bg-white opacity-20"></div>
            <img src="./src/Images/DesignPicked/vvvv.png"/>
            </div>
            <div className="w-full relative">
            <div className="absolute w-full h-full
                 bg-white opacity-20"></div>
            <img className="bg-no-repeat bg-cover" 
             src="./src/Images/DesignPicked/vvvvv.png"/>
            </div>
            
        </div>
        </div>
        </Carousel>

    )
}
