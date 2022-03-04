import React from 'react';
import './Loader.css'

export default function Loader(props) {
  return ( 
  <div className=''>
    <div className="Overlay"></div>
      <div className="flex justify-center align-center m-auto  w-1/4 p-3  top-50 text-center   bg-white border-gray-600"> 
      <div class="lds-roller"> 
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          </div>
          <div className="pt-30">Loading</div>
  </div>
  </div>
  );
}
