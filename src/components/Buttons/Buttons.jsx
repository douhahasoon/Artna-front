import React from 'react'
import Loader from '../Loader/Loader'

export default function Buttons() {
    return (
        
        <div className="grid w-[50%] mx-auto grid-cols-12   pt-12 mt-12  justify-center"> 
        
        
        <button type="button" 
        class="text-white bg-gray-800
         hover:bg-gray-900 focus:ring-4
          focus:ring-gray-300 font-medium
           rounded-lg text-base px-5 py-2.5 
           text-center mr-2 mb-2 
           dark:bg-gray-800 dark:hover:bg-gray-700 
           dark:focus:ring-gray-800 
           dark:border-blue-700 
            col-span-12 sm:col-span-6 md:col-span-3">Posts</button>
        <button type="button" 
        class="text-gray-900 bg-white border border-gray-300
         hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 
         font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2
          mb-2 dark:bg-gray-600 dark:text-white 
          dark:borderay-600-gr
           dark:hover:bg-gray-700 
           dark:hover:border-blue-700
            dark:focus:ring-gray-800 col-span-12 sm:col-span-6 md:col-span-3">Hand Made</button>
            <button type="button" 
        class="text-gray-900 bg-white border border-gray-300
         hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 
         font-medium rounded-lg text-base  px-5 py-2.5 text-center mr-2
          mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600
           dark:hover:bg-gray-700 dark:hover:border-blue-700
            dark:focus:ring-gray-800 col-span-12 sm:col-span-6 md:col-span-3">Paintings</button>
            <button type="button" 
        class="text-gray-900 bg-white border border-gray-300
         hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 
         font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2
          mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600
           dark:hover:bg-gray-700 dark:hover:border-blue-700
            dark:focus:ring-gray-800 col-span-12 sm:col-span-6 md:col-span-3">Oil Paintings</button>
     
        </div>
        
    )
}
