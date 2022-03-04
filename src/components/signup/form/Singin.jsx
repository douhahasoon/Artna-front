import React from 'react'

import arrow from '../image/arrow.png'
import { Link } from 'react-router-dom'
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios'
import {TOKEN_KEY} from '../utils/Constants'
// import { useNavigate } from 'react-router';




export default function Singin() {
    const navigate = useNavigate()
    const [firstname, setFirstname ] = React.useState('')
    const [lastname, setLastname ] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password1, setPassword1] = React.useState('')
    const [password2, setPassword2] = React.useState('')
    const singup = (e)=>{
        e.preventDefault()

        axios({
            method: "post",
            url: 'https://douha.pythonanywhere.com/api/auth/signup',
            headers: { "Content-type": "application/json" },
            data:   {
            first_name:firstname,
            last_name:lastname,
            email:email,
            password1:password1,
            password2:password2,
    
 },
        })
       .then((response)=>{
            console.log(response)
            let data = response.data;
          localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
           navigate('/login')
       })
      .catch((err)=>{
           console.log(err)
        })
   }
//    const HandleSubmit  = (e)=>{
//        e.preventDefault()
//    }
   
    return (
        <div class="flex flex-col  items-center    mt-9  ">
        <form onSubmit={singup}> 
            
            {/* <Link to='/login'>
                <button class="btn btn-square btn-ghost w-40 ml-5 ">
                    <img src={arrow} alt="Iphone13" height={30} width={30} />
                    <p class="text-gray-400 ml-2">
                        Back</p>
                </button>
            </Link> */}
            <h1 class="place-self-center text-3xl font-sans mb-10">
                <b>Account SignUp</b>
            </h1>
            {/* <form onSubmit={HandleSubmit}> */}

            <div class="form-control place-self-center ">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                    First Name
                    </span>
                </label>
                <input
                    value={firstname} onChange={(e)=>setFirstname(e.target.value)}
                    type="text"
                    placeholder="First Name"
                    class="input input-bordered h-48.55 mx-8 w-80 place-self-center"
                    name="first-name"
                    required />

            </div>

            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                        Last Name
                    </span>
                </label>
                <input
                    value={lastname} onChange={(e)=>setLastname(e.target.value)}
                    type="text"
                    placeholder="Last Name"
                    class="input  input-bordered mx-8 w-80 place-self-center"
                    name="last-name" 
                    required/>
            </div>
            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                        Email
                    </span>
                </label>
                <input
                    value={email} onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    class="input  input-bordered mx-8 w-80 place-self-center" 
                    name="email"
                    required />
            </div>
            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                        Password
                    </span>
                </label>
                <input
                    value={password1} onChange={(e)=>setPassword1(e.target.value)}
                    type="password"
                    placeholder="password"
                    class="input input-bordered mx-8 w-80 place-self-center"
                    name="password"
                    required />
            </div>
            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                    Password
                    </span>
                </label>
                <input
                    value={password2} onChange={(e)=>setPassword2(e.target.value)}
                    type="password"
                    placeholder="Verified Password"
                    class="input input-bordered mx-8 w-80 place-self-center"
                    name="password" 
                    required />
            </div>
           
            <button    type='Sbmit' class="btn btn-wide mx-8 w-426 w-80 mt-8 place-self-center">
            Signup
            </button>
           

        </form>
        </div>
      



    )
}
