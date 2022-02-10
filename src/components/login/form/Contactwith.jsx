import React from 'react'
import Frame14 from '../image/Frame14.jpg'
import Frame15 from '../image/Frame15.jpg'
import Frame16 from '../image/Frame16.jpg'

export default function Contactwith() {
    return (

        <div class=" mx-8 ">
            <p class="text-xs font-sans text-gray-400 text-center my-10" >
                Or continue with
            </p>

            <div class=" mx-8 flex">
                <div class=" flex-auto ml-20">
                    <a href='#'><img src={Frame14} alt="Google" /> </a>
                </div>
                <div class=" flex-auto ">
                    <a href='#'><img src={Frame15} alt="Facebook" /></a>
                </div>
                <div class=" flex-auto ">
                    <a href='#'><img src={Frame16} alt="Apple acount" /></a>
                </div>
            </div>
        </div>
    )
}
