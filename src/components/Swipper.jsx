import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swipper.css";

import bodyShow from "./highlightsImages/bodyshow.png";
import fashion from "./highlightsImages/fashion show.png";
import CTF from "./highlightsImages/CTF 23.png";
import hack from "./highlightsImages/hackathone.png";
import unplugged from "./highlightsImages/unplugged.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Swipper() {
  return (
    <div className="swipper-wrapper">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
            <div className="swipper-img-container">
                <img src={bodyShow} alt="" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="swipper-img-container">
                <img src={fashion} alt="" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="swipper-img-container">
              <img src={CTF} alt="" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="swipper-img-container">
              <img src={hack} alt="" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="swipper-img-container">
              <img src={unplugged} alt="" />
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
