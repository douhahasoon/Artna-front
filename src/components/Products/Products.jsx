import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import APIJS from '../../API.JS'
// import { baseURL } from '../../baseurl'
import aaa from '../../Images/Products/aaa.png'
import fff from '../../Images/Products/fff.png'

import ccc from '../../Images/Products/ccc.png'

import ddd from '../../Images/Products/ddd.png'
import Cart from '../Cart/Cart'
import Loader from '../Loader/Loader'



export default function Products() {
const default_list =     [
        {
            id:'1',
            name:'Handmade',
            description: 'paintin by David Walker',
            price: '699',
            image:  aaa
        },
        {
            id:'2',
            name:'Handmade',
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
    ]
    const [isload, setIsLoad] = useState(true)
    const [prodect,setProdect] = useState([])
    useEffect(()=>{

        APIJS.get(`/api/products`)
        .then(res=>{
            console.log(res.data);
            const temp = res.data;
            setProdect(temp);
            setIsLoad(false)
            console.log(temp);
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
      
    {(isload ?<Loader/>: (    <div class="grid sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8  gap-2 pl-16 pr-6  pt-16"> 
    
    {
        ((prodect)).map((index,i)=>{
        
        
         return (<Cart  key={i}
                        id={index.id}
                        image={(index.images.length ? index.images[0].image : null)}
                        description={index.description}
                        name={index.name}
                        price={index.price}
                />)
           })
        
    }
  


{/* 1 */}




{/* 3 */}


</div>))}
  <Link to={'/gallery'}> 
 <a  className="mt-3 ml-20  text-indigo-500 inline-flex items-center">See More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        </Link>

</div>


  )
}
