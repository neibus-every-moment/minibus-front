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
        pagination
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides?.map(({ id }) => (
          <SwiperSlide key={id}>
            <img src="../static/dummy/picture-empty.png" alt="" />
            {slides.length > 1 &&
              <div className="page-number">{id}/{slides.length}</div>
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ImageSwiper;
