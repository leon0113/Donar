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
                <SwiperSlide><img src={images.donarPizza} alt="header_img" /></SwiperSlide>
                <SwiperSlide><img src={images.new1} alt="header_img" /></SwiperSlide>
                <SwiperSlide><img src={images.donarPizza} alt="header_img" /></SwiperSlide>
                {/* <SwiperSlide><img src={images.kebab} alt="header_img" /></SwiperSlide> */}
                <SwiperSlide><img src={images.falafel} alt="header_img" /></SwiperSlide>
            </Swiper>
        </>
    );
}
