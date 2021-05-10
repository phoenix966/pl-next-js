import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function SmallSlider() {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="slider__wrap">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__wrap">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__wrap">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__wrap">Slide 1</div>
        </SwiperSlide>
    </Swiper>
    <style jsx>
      {`
        .slider{
          height: 100px;
          margin: 0 auto;
        }
        .slider__wrap{
          width: 80px;
          height: 80px;
          border: 1px solid blue;
          margin: 0 auto;
        }
      `}
    </style>
    </div>
  )
}
