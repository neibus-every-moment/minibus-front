import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function ImageModal({ isOpen, closeModal, images }: {
  isOpen: boolean,
  closeModal: () => void,
  images: {id: number, url: string}[],
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
          {images?.map(({ id }) => (
            <SwiperSlide key={id}>
              <img src="../static/dummy/picture-empty.png" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>

      </section>
    </div>
  );
}

export default ImageModal;
