import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import mirada from "../assets/img/mirada.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./sass/slider.scss";

// import required modules
import { Pagination } from "swiper/modules";
import { useSelector } from "react-redux";




export const Slider = ({
  content ,
  format = "img",
}) => {
  const { screenWidth } = useSelector((store) => store.screenSlice);

  const formatTypes = ["img", "text"];

  
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper swiper"
      >
        {content?.map((item, i) => {


        const formatShow = {
          img: <img src={item} />,
          text: <h2 className="slider-text">{item}</h2>,
        };
          return (
            <SwiperSlide key={i} className="swiper-slide">
              <img src={item.img}  />
              <p className="slider-text">{item.text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
