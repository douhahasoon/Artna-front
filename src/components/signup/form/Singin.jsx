import React from 'react'

import arrow from '../image/arrow.png'
import { Link } from 'react-router-dom'



export default function Singin() {
    return (
        <div class="grid flex-grow h-1024  ">
            
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
                        Username
                    </span>
                </label>
                <input
                    type="text"
                    placeholder="username"
                    class="input input-bordered h-48.55 mx-8 w-80 place-self-center" />

            </div>

            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                        Email Address
                    </span>
                </label>
                <input
                    type="text"
                    placeholder="Email Address"
                    class="input  input-bordered mx-8 w-80 place-self-center" />
            </div>
            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                        Phone
                    </span>
                </label>
                <input
                    type="text"
                    placeholder="Phone"
                    class="input  input-bordered mx-8 w-80 place-self-center" />
            </div>
            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                        City
                    </span>
                </label>
                <input
                    type="text"
                    placeholder="City"
                    class="input input-bordered mx-8 w-80 place-self-center" />
            </div>
            <div class="form-control place-self-center">
                <label class="label">
                    <span class="label-text mx-8 text-gray-400">
                        Password
                    </span>
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    class="input input-bordered mx-8 w-80 place-self-center" />
            </div>
            <button class="btn btn-wide mx-8 w-426 w-80 mt-8 place-self-center">
                SignUp
            </button>

        </div>



    )
}
