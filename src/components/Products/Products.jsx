import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import APIJS from '../../API.JS'
// import { baseURL } from '../../baseurl'
import aaa from '../../Images/Products/aaa.png'
import fff from '../../Images/Products/fff.png'

import ccc from '../../Images/Products/ccc.png'

import ddd from '../../Images/Products/ddd.png'



export default function Products() {

    const [prodect,setprodect] = useState([
        {
            id:'1',
            name:'Painting',
            description: 'paintin by David Walker',
            price: '699',
            image:  aaa
        },
        {
            id:'2',
            name:'Painting',
            description: 'paintin by David Walker',
            price: '699',
            image:  ddd
        },
        {
            id:'3',
            name:'Painting',
            description: 'paintin by David Walker',
            price: '699',
            image:  ccc
        },
        {
            id:'4',
            name:'Painting',
            description: 'paintin by David Walker',
            price: '699',
            image: fff
        },
    ])
    useEffect(()=>{

        APIJS.get(`/api/products`)
        .then(res=>{
            const temp = res.data;
            setprodect(temp);
        })
        .catch(err=>{
            console.log(err);
        })


    },[])
   
  return (
      

    <div>
    <div className="pt-14"> 
    <h1 className="antialiased text-left pl-16 font-serif font-semibold text-3xl">Products</h1>

    </div>
      
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  gap-2 pl-16 pr-6  pt-16"> 
    
    {
        prodect.map(index=>{
        
        return    <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700">
        
    <a href="#" className="relative">
        <div className="absolute w-full h-full bg-white opacity-10"></div>
    <img width={330} class="p-8  rounded-t-lg ml-7" src={index.image} alt="product image" />
    </a>

    <div class="px-5 pb-5">
        {/* <NavLink to="Gallery">  */}
        <Link to='/gallery'>

            <h3 class="w-5 h-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">{index.name}</h3>
            <p className="text-left mt-1 max-w-2xl text-sm text-gray-500">{index.description}</p>
        

        </Link>
        {/* <a>
            
        </a>
        </NavLink> */}


        <div class="flex items-center mt-2.5 mb-5">
            <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
        </div>
        <Link to='/gallery'>
        <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-black">${index.price}</span>
            <a href="/gallery" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Shop now</a>
        </div>
        </Link>
    </div>
</div>
        })
    }


{/* 1 */}




{/* 3 */}


</div>
</div>

  )
}
