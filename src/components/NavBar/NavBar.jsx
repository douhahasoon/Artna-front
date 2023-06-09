import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './search/Search'
import data  from './search/MOCK_DATA.json'

export default function NavBar() {
const [navbarOpen, setNavbarOpen] = useState(false)

return (
    <div>

    <nav className="bg-white shadow mt-1 sticky  ">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div>
                <img src="./src/Images/Hero/image2.png" alt="jk" />       
</div>
                        
                
                <div className="flex md:hidden">
                    <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <Search  placeholder="Enter the Prodect name ... " data={data}/>

            <div className="items-center md:flex">
                <div className="flex flex-col md:flex-row md:mx-6 ">

                    
                    
                    <a className="my-1 text-lg font-sans font-medium text-gray-400 transition-colors duration-200 transform 
                    dark:text-gray-500 
                    dark:hover:text-black md:mx-4 md:my-0" href="/">Home</a>
                    <a className="my-1 text-lg  font-sans font-medium text-gray-400 transition-colors duration-200 transform
                    dark:text-gray-400  dark:hover:text-black  md:mx-4 md:my-0" href="/SignUp">Signup</a>
                    <a className="my-1 text-lg   font-sans font-medium text-gray-400 transition-colors duration-200 transform 
                    dark:text-gray-400  dark:hover:text-black md:mx-4 md:my-0" href="/gallery">Gallery</a>
                    <a className="my-1 text-lg  font-sans font-medium text-gray-400 transition-colors duration-200 transform 
                    dark:text-gray-400  dark:hover:text-black md:mx-4 md:my-0" href="/AboutUs">About</a>
                    <a className="my-1 text-lg  font-sans font-medium text-gray-400 transition-colors duration-200 transform 
                    dark:text-gray-400  dark:hover:text-black md:mx-4 md:my-0" href="/Blog">Blog</a>
                </div>

                <div className="flex justify-center md:block">
                    <a className="relative text-gray-700 transition-colors 
                    duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="/CheckOut">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" strokeLinecap="round" stroke-linejoin="round"/>
                        </svg>

                        <span className="absolute top-0 left-0 p-1 text-lg text-white bg-black rounded-full"></span>
                    </a>
                </div>
            </div>
        </div>
    </nav>



    </div>
    )
}
