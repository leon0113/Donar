// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { images } from '../../constants';

export default function SwiperJs() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={images.pizza1} alt="header_img" /></SwiperSlide>
                <SwiperSlide><img src={images.pizza} alt="header_img" /></SwiperSlide>
                <SwiperSlide><img src={images.ceaser} alt="header_img" /></SwiperSlide>
                <SwiperSlide><img src={images.donarbox} alt="header_img" /></SwiperSlide>
                {/* <SwiperSlide><img src={images.kebab1} alt="header_img" /></SwiperSlide> */}
            </Swiper>
        </>
    );
}
