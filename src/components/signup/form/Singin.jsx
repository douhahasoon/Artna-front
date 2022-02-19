import React from 'react'

import arrow from '../image/arrow.png'
import { Link } from 'react-router-dom'
// import axios from 'axios';



export default function Singin() {
    
   
    return (
        <div class="grid flex-grow  mt-9  ">
            
            <Link to='/login'>
                <button class="btn btn-square btn-ghost w-40 ml-5 ">
                    <img src={arrow} alt="Iphone13" height={30} width={30} />
                    <p class="text-gray-400 ml-2">
                        Back</p>
                </button>
            </Link>
            <h1 class="place-self-center text-3xl font-sans mb-10">
                <b>Account SignUp</b>
            </h1>

            <div class="form-control place-self-center ">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                       First Name
                    </span>
                </label>
                <input
                    type="text"
                    placeholder="First Name"
                    class="input input-bordered h-48.55 mx-8 w-80 place-self-center"
                    name="first-name" />

            </div>

            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                        Last Name
                    </span>
                </label>
                <input
                    type="text"
                    placeholder="Last Name"
                    class="input  input-bordered mx-8 w-80 place-self-center"
                    name="last-name" />
            </div>
            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                        Email
                    </span>
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    class="input  input-bordered mx-8 w-80 place-self-center" 
                    name="email"/>
            </div>
            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                        Password
                    </span>
                </label>
                <input
                    type="password"
                    placeholder="password"
                    class="input input-bordered mx-8 w-80 place-self-center"
                    name="password1" />
            </div>
            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                    Password2
                    </span>
                </label>
                <input
                    type="password"
                    placeholder="Verified Password"
                    class="input input-bordered mx-8 w-80 place-self-center"
                    name="password1" />
            </div>
            <button class="btn btn-wide mx-8 w-426 w-80 mt-8 place-self-center">
            Verified Password
            </button>

        </div>



    )
}
