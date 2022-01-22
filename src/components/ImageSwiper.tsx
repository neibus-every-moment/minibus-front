// import 'swiper/css';
// import 'swiper/css/navigation';

import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ImageModal from './ImageModal';

const images = [
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
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = (): void => {
    setModalOpen(false);
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination
      >
        {images?.map(({ id }) => (
          <SwiperSlide key={id}>
            <img
              src="../static/dummy/picture-empty.png"
              alt=""
              onClick={() => setModalOpen(true)}
            />
            {images.length > 1 &&
              <div className="page-number">{id}/{images.length}</div>
            }
          </SwiperSlide>
        ))}
      </Swiper>
      <ImageModal isOpen={modalOpen} closeModal={closeModal} images={images} />
    </>
  );
}

export default ImageSwiper;
