import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SmallSlide from './SmallSlide';

export default function SmallSlider() {

  let filterSlide = {
    firstValue: '20',
    secondValue: '100'
  }

  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        centeredSlides={true}
      >
        <SwiperSlide>
          {({ isActive }) => {
            if (isActive) {
              return (
                <SmallSlide img="/partners/Giz.png" filter={filterSlide.firstValue} />
              )
            } else {
              return (
                <SmallSlide img="/partners/Giz.png" filter={filterSlide.secondValue} />
              )
            }
          }}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => {
            if (isActive) {
              return (
                <SmallSlide img="/partners/Crm.png" filter={filterSlide.firstValue} />
              )
            } else {
              return (
                <SmallSlide img="/partners/Crm.png" filter={filterSlide.secondValue} />
              )
            }
          }}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => {
            if (isActive) {
              return (
                <SmallSlide img="/partners/Megaline.png" filter={filterSlide.firstValue} />
              )
            } else {
              return (
                <SmallSlide img="/partners/Megaline.png" filter={filterSlide.secondValue} />
              )
            }
          }}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => {
            if (isActive) {
              return (
                <SmallSlide img="/partners/Aknet.png" filter={filterSlide.firstValue} />
              )
            } else {
              return (
                <SmallSlide img="/partners/Aknet.png" filter={filterSlide.secondValue} />
              )
            }
          }}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => {
            if (isActive) {
              return (
                <SmallSlide img="/partners/Spa.png" filter={filterSlide.firstValue} />
              )
            } else {
              return (
                <SmallSlide img="/partners/Spa.png" filter={filterSlide.secondValue} />
              )
            }
          }}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
