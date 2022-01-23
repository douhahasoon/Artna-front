import React from "react";

// All the images
import aaa from "../../Images/Products/aaa.png";
import ccc from "../../Images/Products/ccc.png";
import ddd from "../../Images/Products/ddd.png";

// Carousel
import { Carousel } from "react-responsive-carousel";

const theCarousel = () => (
  <Carousel
    autoPlay={true}
    interval={2000}
    infiniteLoop={true}
    showArrows={false}
    showIndicators={false}
    showThumbs={false}
    swipeable={true}
    showStatus={false}
  >
    <div>
      <img className="object-none h-48 w-96 " src={aaa} alt="Iphone13" />
      
    </div>
    <div>
      <img className="object-none h-48 w-96 " src={ccc} alt="Macbook" />
      
    </div>
    <div>
      <img className="object-none h-48 w-96" src={ddd} alt="Zenbook" />
     
    </div>
  </Carousel>
);

export default theCarousel;