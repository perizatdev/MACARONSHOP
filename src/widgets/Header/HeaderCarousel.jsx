import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import caro from '../../shared/assets/Askat/caroImg.svg'
import caro2 from '../../shared/assets/Askat/caroImg2.svg'
import caro3 from '../../shared/assets/Askat/caroImg3.svg'

// Import Swiper styles
import "swiper/css";


export default function HeaderCarousel() {
  return (
    <div className="flex">
      <Swiper
      loop={true}
    //   autoplay={dela}
      
      className="mySwiper bg-[#D4E9F9]">
        
        <SwiperSlide>
            <div className="flex justify-center items-center h-[50px] gap-5"> 
                <img src={caro} alt="as" />
                <p>МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center h-[50px] gap-5">
                <img src={caro2} alt="as" />
                <p>ВСЕГДА СВЕЖЕЕ</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center h-[50px] gap-5">
                <img src={caro3} alt="as" />
                <p>ОПТОВЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex justify-center items-center h-[50px] gap-5">
                <img src={caro2} alt="as" />
                <p>МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ</p>
            </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute">Profile</div>
    </div>
  );
}
