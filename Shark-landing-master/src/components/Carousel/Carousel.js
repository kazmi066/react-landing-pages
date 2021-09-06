import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { slider1, slider2, slider3, slider4 } from "../../assets";
import "./Carousel.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([Autoplay]);

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="not found" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="not found" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
