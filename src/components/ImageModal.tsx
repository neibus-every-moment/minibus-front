import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ImageProps } from './PostList';

function ImageModal({ isOpen, closeModal, images }: {
  isOpen: boolean,
  closeModal: () => void,
  images: ImageProps[],
}) {
  return (
    <div className={isOpen ? 'modal openModal' : 'modal'}>
      <section>
        <button onClick={closeModal}>
          <img src="../static/icons/icon_cancel.svg" alt="닫기 버튼" />
        </button>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ type: 'fraction' }}
        >
          {images?.map(({ id, url }) => (
            <SwiperSlide key={id}>
              <img src={url} alt="유저 입력 사진" />
            </SwiperSlide>
          ))}
        </Swiper>

      </section>
    </div>
  );
}

export default ImageModal;
