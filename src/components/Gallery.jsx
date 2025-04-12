import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../assets/gal1.jpg";
import image2 from "../assets/gal2.jpg";
import image3 from "../assets/gal3.jpg";
// import image4 from "../assets/image4.jpg";
// import image5 from "../assets/image5.jpg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Gallery.css";

const images =[image1, image2, image3, ];

const Gallery = () => {
  return (
    <>
      <div className="tit-gal">Gallary</div>
    <div className="gallery-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="wedding-slider"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Wedding ${index}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default Gallery;
