import React from "react";
import "./Home.scss";
import {useEffect, useState} from "react";
import ScrollAnimation from 'react-animate-on-scroll';



// Related to the carousel

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loader from "../Loader/Loader";
import Gallery from "../../Pages/Gallery";
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      // Loading function to load data or 
      // fake it using setTimeout;
      const loadData = async () => {
  
        // Wait for two second
        await new Promise((r) => setTimeout(r, 2000));
  
        // Toggle loading state
        setLoading((loading) => !loading);
      };
        
      loadData();
    }, [])
      
    // If page is in loading state, display 
    // loading message. Modify it as per your 
    // requirement.
    if (loading) {
        return <div><Loader /></div>
    }
      
    // If page is not in loading state, display page.
    else {
       <Gallery/>
    }
  return (
    <div className="e-home py-5 px-6">
      <div className="lg:container mx-auto">
        <div className="e-flex-container">
          <div className="e__home">
            <div className="e__home--left">
              
               <ScrollAnimation animateIn='bounceInRight'
             animateOut='bounceOutLeft'>
              <h1 class=" font-bold text-gray-100 text-5xl md:text-7xl">
              HOUSE OF ART 
              </h1>
              </ScrollAnimation>
             
              <h2 className="text-gray-300 font-light text-xl md:text-2xl py-2">
              ART not suppose to be nice ....
              It suppose to make you feel something !

              </h2>
              <Link to='/gallery'> 
               <button className="bg-gray-100 hover:bg-gray-400 text-black font-semi-bold py-2 px-4 rounded">
                Buy Now
                
                </button>
                </Link>
            </div>
            <div className="e__home--right">
              {/* <Carousel /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;