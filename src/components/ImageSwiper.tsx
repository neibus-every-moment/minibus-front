// import 'swiper/css';
// import 'swiper/css/navigation';
import './ImageSwiper.scss';

import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
  {
    id: 1,
    url: 'Slide 1',
  },
  {
    id: 2,
    url: 'Slide 2',
  },
  {
    id: 3,
    url: 'Slide 3',
  },
  {
    id: 4,
    url: 'Slide 4',
  },
];

function ImageSwiper() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides?.map(({ id, url }) => (
          <SwiperSlide key={id}>
            {url}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ImageSwiper;
