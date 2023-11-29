import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carrusel.scss';

const Carrusel = () => {

 

  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
  
  };

  return (
    <div className="fotos">
      <Slider {...settings}>
         <img src="assets/nosotros1.jpg" alt="fotos"/>
         <img src="assets/nosotros3.jpg" alt="fotos"/>
         <img src="assets/nosotros4.jpg" alt="fotos"/>
         <img src="assets/nosotros2.jpg" alt="fotos"/>
         <img src="assets/nosotros5.jpg" alt="fotos"/>
         <img src="assets/nosotros6.jpg" alt="fotos"/>
         <img src="assets/nosotros7.jpg" alt="fotos"/>
        

      </Slider>
    </div>
  );
};

export default Carrusel;
