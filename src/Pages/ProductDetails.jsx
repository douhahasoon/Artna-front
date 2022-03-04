import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Link, UNSAFE_NavigationContext, useParams } from "react-router-dom";
import APIJS from "../API.JS";
import Details from "../components/Products/Details";
import aaa from '../Images/Products/aaa.png'
import fff from '../Images/Products/fff.png'

import ccc from '../Images/Products/ccc.png'

import ddd from '../Images/Products/ddd.png'
import Loader from '../components/Loader/Loader'



const ProductDetails = () => {
   
    const [isload, setIsLoad]= useState(true)
    const [prodect,setprodect] = useState([
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
    ])
    let {id} = useParams()

  

    const [item,setitem] = useState({
        id:'1',
        name:'Oil Painting',
        description:"Lorem Ipsum is that it",
        price:'790.89',

    });


    useEffect(()=>{
       
        APIJS.get(`/api/products/${id}`)

        .then(res=>{
            const temp = res.data;
            console.log(temp);

            setitem(temp);
            setIsLoad(false)
        })
        .catch(err=>{
            console.log(err);
        })


    },[])
   





    

    return (
        <>
        
             {isload  ? <Loader/> : ( <Details 
                     id={item.id}
                     name= {item.name}
                     price= {item.price}
                     image= {(item.images.length ? item.images[0].image : null)}
                     description= {item.description}
                   
                     
                     />  )

             }
                
                      
                 
                 
       </>
       
    );
};

export default ProductDetails;
