import React from 'react';
import './Loader.css'

export default function Loader(props) {
  return ( 
  <div>
    <div className="Overlay"></div>
      <div className="absolute w-1/4 p-3  top-50 text-center left-50 ml-44  bg-white border-gray-600"> 
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
          <div>Loading</div>
  </div>
  </div>
  );
}
