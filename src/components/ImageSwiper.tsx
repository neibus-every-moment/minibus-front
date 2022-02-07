// import 'swiper/css';
// import 'swiper/css/navigation';

import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ImageModal from './ImageModal';
import { ImageProps } from './PostList';

function ImageSwiper({ images }: { images: Array<ImageProps> }) {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = (): void => {
    setModalOpen(false);
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
      >
        {images?.map(({ id, url }) => (
          <SwiperSlide key={id}>
            <img
              src={url}
              alt="유저 입력 사진"
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
