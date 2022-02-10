import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../image/arrow.png'
import Remeberme from './Remeberme'
import Contactwith from './Contactwith'

export default function Registration() {
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
                    type="text"
                    placeholder="Email Address"
                    class="input  input-bordered  mx-8 w-80 place-self-center" />
            </div>
            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text  mx-8 text-gray-400 ">
                        Password
                    </span>
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    class="input  input-bordered  mx-8 w-80 place-self-center" />
            </div>
            <Remeberme />
            <button class="btn btn-wide  mx-8 place-self-center  ">
                Login
            </button>
            <Contactwith />
        </div>



    )
}
