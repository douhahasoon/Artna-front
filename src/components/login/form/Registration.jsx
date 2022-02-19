import React from "react";
// import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import arrow from '../image/arrow.png'
import Remeberme from './Remeberme'
import Contactwith from './Contactwith'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios'
import {TOKEN_KEY} from '../utils/Constants'





export default function Registration() {
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
   const login = (e)=>{
    
      axios.post(' /api/academy/auth/login',
    {
        email:email,
        password:password,
        
        }
        )
       .then((response)=>{
            console.log(response)
           let token = response.data.token.access_token;
            let data = response.data;
           localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
           navigate('/')
       })
      .catch((err)=>{
           console.log(err)
        })
   }
    
    // const {register, handleSubmit, formState: {errors},reset} = useForm()

    // const onSubmit = (data) =>{
    //     console.log(data);
    //     reset()
    // }
    return (
        
        
        <div class="grid flex-grow h-full  ">
            
            <Link to='/'>
                <button class="btn btn-square btn-ghost w-40 ml-5 ">
                    <img src={arrow} alt="arrow" height={30} width={30} />
                    <p class="text-gray-400 ml-2">Back</p>
                </button>
            </Link>
            <div class="place-self-center mb-10">
                <p class="text-3xl font-sans">
                    <b>Account Login</b>
                </p>
                <p class="text-xs font-sans text-gray-400">
                    Dont have an account ?
                    <Link to='/signup'>
                        <a href='#' class="text-xs font-sans text-gray-600" > Sign up here</a>
                    </Link>
                </p>
            </div>
            
            <div class="form-control  place-self-center">
                <label class="label">
                    <span class="label-text  mx-8 text-gray-400">
                        Email Address
                    </span>
                </label>
                <input
                    value={email} onChange={(e)=>setEmail(e.target.value)}
                    type="text"
                    placeholder="Email Address"
                    class="input  input-bordered  mx-8 w-80 place-self-center"
                    />
                       
            </div>
            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text  mx-8 text-gray-400 ">
                        Password
                    </span>
                </label>
                <input
                value={password} onChange={(e)=>setPassword(e.target.value)} 
                    type="password"
                    placeholder="password"
                    class="input  input-bordered  mx-8 w-80 place-self-center"
                    />
                   
            </div>
          
            <Remeberme />
            <button  type="submit" onClick={login} class="btn btn-wide  mx-8 place-self-center  ">
                Login
            </button>
            <Contactwith />
           
        </div>


    )
}

