// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import carouselImg from '../../shared/assets/Abu/carousel.png'
import carouselImg2 from '../../shared/assets/Abu/carousel2.png'
import carouselImg3 from '../../shared/assets/Abu/carousel3.png'
import carouselImg4 from '../../shared/assets/Abu/carousel4.png'

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function App() {
  return (
    <div className=''>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='w-[270px] h-[380px] '>
                <div className='absolute bg-[rgb(140,196,236)] w-[150px] h-[20px] mt-[20px] pl-[10px] text-white'>Новинка</div>
                <img className='w-full h-270px' src={carouselImg} alt="dsd"/>
                <div className='bg-[rgb(140,196,236)] w-full h-[110px]'>
                    <p className='w-[230px] h-[60px] mx-auto pt-[20px] text-white text-base font-semibold'>По СПб в районе КАД – от 3000₽По МСК – от 5000₽</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[270px] h-[380px] '>
                <div className='absolute bg-[rgb(255,77,109)] w-[150px] h-[20px] mt-[20px] pl-[10px] text-white'>Новинка</div>
                <img className='w-full h-270px' src={carouselImg2} alt="dsd"/>
                <div className='bg-[rgb(255,77,109)] w-full h-[110px]'>
                    <p className='w-[230px] h-[60px] mx-auto pt-[20px] text-white text-base font-semibold'>По СПб в районе КАД – от 3000₽По МСК – от 5000₽</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[270px] h-[380px] '>
                <div className='absolute bg-red-500 w-[150px] h-[20px] mt-[20px] pl-[10px] text-white'>Новинка</div>
                <img className='w-full h-270px' src={carouselImg3} alt="dsd"/>
                <div className='bg-[rgb(140,196,236)] w-full h-[110px]'>
                    <p className='w-[230px] h-[60px] mx-auto pt-[20px] text-white text-base font-semibold'>По СПб в районе КАД – от 3000₽По МСК – от 5000₽</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[270px] h-[380px]'>
                <div className='absolute bg-red-500 w-[150px] h-[20px] mt-[20px] pl-[10px] text-white'>Новинка</div>
                <img className='w-full h-270px' src={carouselImg4} alt="dsd"/>
                <div className='bg-[rgb(140,196,236)] w-full h-[110px]'>
                    <p className='w-[230px] h-[60px] mx-auto pt-[20px] text-white text-base font-semibold'>По СПб в районе КАД – от 3000₽По МСК – от 5000₽</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[270px] h-[380px] '>
                <div className='absolute bg-red-500 w-[150px] h-[20px] mt-[20px] pl-[10px] text-white'>Новинка</div>
                <img className='w-full h-270px' src={carouselImg4} alt="dsd"/>
                <div className='bg-[rgb(140,196,236)] w-full h-[110px]'>
                    <p className='w-[230px] h-[60px] mx-auto pt-[20px] text-white text-base font-semibold'>По СПб в районе КАД – от 3000₽По МСК – от 5000₽</p>
                </div>
            </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
