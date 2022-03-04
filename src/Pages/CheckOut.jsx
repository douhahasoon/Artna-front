import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import BreadCrumps from "../components/BreadCrumps/BreadCrumps";
import { useState } from "react";
import aaa from '../Images/Products/aaa.png'
import { useEffect } from "react";
import axios from "axios";
import APIJS from "../API.JS";
import { baseURL } from "../baseurl";
import { useForm } from "react-hook-form";

const CheckOut = () => {
    const [total,settotal]= useState(0)
    const [item,setItem]= useState([])
    const [product,setProduct] = useState([])
     const { register, formState: { errors }, handleSubmit } = useForm();
     const onSubmit = data => console.log(data);






    useEffect(
 
        ()=>{
    
    APIJS.get('api/order/cart')
        .then((response)=>{
        const temp = response.data;
            temp.map(index=>{
            settotal(total+(index.item_qty * index.product.price))
    })
        
        setItem([...temp])
        console.log(item);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    ,[])

      const removeFromCart = (id)=> {
    APIJS.delete(`/api/order/item/${id}`, {
        
    })
    .then(
        res=>{ 
            setItem(item.filter(i=> i.id != id))
            }
    )
    .catch((err)=>{
        console.log(err)
        
            })
    }


    




    return (
        <>
        <NavBar/>
        <BreadCrumps />
        <div className="lg:container lg:mx-auto grid grid-cols-9 lg:grid-cols-12">
            <div className="col-span-9 lg:col-span-8 xl:col-span-9 bg-white h-auto lg:h-screen relative lg:px-10 p-6 lg:py-12">
                <p>
                <Link to="/gallery"> 
                    <svg className="inline" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1L1 5L5 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <span className="cursor-pointer text-gray-500 font-normal text-base ml-2.5">Back</span>
                    </Link>
                </p>
                <h3 className="font-semibold text-gray-800 text-4xl mt-2">Coustmer Details</h3>

                <div className="mt-7 lg:mt-20">
                    <p className="font-normal text-sm text-gray-600 mb-3">Your details</p>
                    <h3 className="text-2xl text-gray-800 font-medium">Enter your details</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8" autoComplete="off">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            <input {...register("emailAddress", { required: true })}  aria-label="emailAddress" className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none" type="email" name="email" id="email" placeholder="First Name" />
                            {errors.emailAddress?.type === 'required' && "email address is required"}
                            <input  {...register("yourName", { required: true })}
                              aria-label="yourName" className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 
                              focus:outline-none" type="text" name="yourName" id="YourName" placeholder="Last Name" />
                                {errors.yourName?.type === 'required' && "your Name is required"}
                            <input  aria-label="phoneNumber" className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none" type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
                            <input  aria-label="Location" className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none" type="text" name="Location" id="YourName" placeholder="Province" />
                            <input  aria-label="Locatio" className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none" type="text" name="Location" id="YourName" placeholder="City" />
 
                        </div>
                    </form>
                </div>

                <Link to="/MyModal"> 
                <button  className="bg-gray-800 hover:bg-gray-900 rounded text-white p-4 text-lg my-3
                    mt-10 w-full md:w-auto">Checkout</button></Link>
            </div>
            <div className="relative col-span-9 lg:col-span-4 xl:col-span-3 bg-gray-100 lg:h-auto xl:h-screen px-8 py-12 xl:px-6 xl:py-20">
                <div className="flex flex-1">
                    <h3 className="text-gray-800 font-semibold text-2xl">Items</h3>
                    
                    <div className="flex-auto">
                        
                    </div>
                    <Link to='/ProductDetails'> 
                    <button className="text-gray-600 hover:text-gray-800 cursor-pointer text-base font-normal underline">Edit Cart</button>
                    </Link>
                     </div>
                     {
                    item.map(index => {
                       
                        return (<div className="mt-7 flex flex-1 text-gray-800 text-lg font-normal">
                        <img width={120} src={index.product.images.length? baseURL + index.product.images[0].image: ''} />
                        <h3 className="pl-4 pt-11">{index.product.name}</h3>
                    <h3 className="flex-auto text-right pr-4 md:pr-5 lg:pr-4"></h3>
                    <h3 className="pt-11">{index.product.price} $</h3>
                    {/* <button onClick={()=>{removeFromCart(index.id)}} className="text-gray-600 hover:text-gray-800 cursor-pointer text-base font-normal underline">Edit Cart</button> */}
                    <svg onClick={()=>{removeFromCart(index.id)}} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                </div>)

                    }) 
                     }

                

                

                <div className="-bottom-7 px-8 xl:px-12 pb-5 md:-bottom-96 bg-gray-100 md:pt-80 md:pb-10
                 lg:pb-10 lg:pt-0 lg:mt-0 lg:bottom-20 absolute left-0 w-full text-lg font-medium text-gray-800">
                    <span aria-label="Total" className="float-left text-2xl text-gray-800 font-normal">
                        Total
                    </span>
                    <span aria-label="Total Price" className="float-right font-semibold text-gray-800 text-2xl">
                        {(total.toString())}
                    </span>
                    <div className="clear-both"></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CheckOut;
