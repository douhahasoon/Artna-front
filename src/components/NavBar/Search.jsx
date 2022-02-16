
import React, { useState } from 'react'

export default function Search() {
    

    return (
        < div class="font-sans  text-black  bg-white flex items-center justify-center " >
            
            <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
        



        </div >
    )
}
