import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>

      <nav class="flex bg-white flex-wrap  
      items-center justify-center ml-44 p-4">
        <div class="lg:order-2 w-auto lg:w-1/5 lg:text-center">

        </div>
        <div class="block lg:hidden">
          <button class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>
                Menu
              </title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
              </path>
            </svg>
          </button>
        </div>
        <div class=" navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
          <a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
            chat with us
          </a>
          <a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
            07713657239
          </a>
          <a class="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" href="#">
            info@Artna.com
          </a>
        </div>
        <div class="  navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5">
          <a class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
            About us
          </a>
          <Link to="/"> 
          <a  class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" href="#">
            Home
          </a>
          </Link>
          <a class="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-indigo-600" href="#">
            Gallary
          </a>
        </div>

      </nav>
      <div class="divide-y divide-gray-300">
        <div class="text-center py-2"></div>
        <div class="text-center py-2"></div>

      </div>



      <nav class="container flex justify-around  mx-auto bg-white">
        <div class="flex items-center ">
          <img src="./src/Images/Hero/image2.png" alt="jk" />
        </div>
        <div class="font-sans text-black  bg-white flex items-center justify-center ">
          <div class="border rounded-full overflow-hidden flex">
            <input type="text" class="px-8 py-2" placeholder="Search..." />
            <button class="flex items-center justify-center px-4 border-l">
             
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
             
            </button>
          </div>
        </div>



        <div class="flex items-center space-x-2">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </a>
          <a href="/CheckOut">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </a>

        </div>
      </nav>


    </div>
  )
}
