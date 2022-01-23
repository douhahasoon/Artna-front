import React from 'react'

export default function Design() {
    return (
        <div> 

        
        <div className="pt-14"> 
        <h1 className="antialiased  text-left pl-16  font-serif font-semibold text-3xl">Designs Picked For you</h1>

        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  gap-2 pl-16 pr-6  pt-16">
            
            <div className="w-full relative">
                <div className="absolute w-full h-full
                 bg-white opacity-20"></div>
                <img className="bg-no-repeat bg-cover" 
                 src="./src/Images/DesignPicked/vv.png"/>
            </div>
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

    )
}
