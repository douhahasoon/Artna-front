import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'


export default function NavBar() {
  
  return (
    <div>

      <nav class="relative flex bg-white flex-wrap  
      items-center justify-center  p-4">
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

        <div class="flex items-center absolute top-0 left-3 ">
          <img src="./src/Images/Hero/image2.png" alt="jk" />
        </div>
        
        <ul class="menu p-3 bg-base-100 hidden lg:menu-horizontal rounded-box absolute top-0 right-3 ">
        <li>
            <Link to='/login'>
              <a class=" block   lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-400  font-sans" href="#">
                Login
              </a>
            </Link>
          </li>
          <li>
            <Link to="/AboutUs">
              <a class="block   lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-400 font-sans" href="#">
                About us
              </a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a class="block   lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-400 font-sans" href="#">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link to="/Gallery">
              <a class="block  lg:inline-block mt-4 lg:mt-0 text-gray-400 font-sans" href="#">
                Gallery
              </a>
            </Link>
          </li>
          <li>
          <a href="/CheckOut">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </a>
          </li>
        </ul>
        <Search  />
      </nav>
      

     


    </div>
  )
}
