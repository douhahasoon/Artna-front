import React from 'react'
import { Link } from 'react-router-dom'
import WahtsUp from './WhatsUp'
export default function Trending() {
    return (
       
        <div>
            <div className="pt-14"> 
            <h1 className="antialiased text-left
             pl-16 font-serif font-semibold
             text-3xl">Trending</h1>

            </div>
           
            

        
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  gap-2 pl-16 pr-6  pt-14">
            
        <Link to="/gallery">
            <div className="w-full relative">
                <div className="absolute w-full h-full bg-white opacity-20">

                </div>
                
                
                <img className="bg-no-repeat bg-cover" src="./src/Images/Trending/Rect.png"/>
               
            </div>
            </Link>
            
            <div className="w-full relative"> 
            <div className="absolute w-full h-full bg-white opacity-20"> </div>
            <img className="bg-no-repeat bg-cover" src="./src/Images/Trending/sec.png"/>
            </div>
            <div className="w-full relative">
                <div className=" absolute w-full h-full bg-white opacity-20"> </div>
            <img  className="bg-no-repeat bg-cover" src="./src/Images/Trending/Rect.png"/>
            </div>
            <div className="w-full relative"> 
            <div className="absolute w-full h-full bg-white opacity-20"> </div>
            <img className="bg-no-repeat bg-cover" src="./src/Images/Trending/sec.png"/>
            </div>
           
            
        </div>
        </div>

    )
}
