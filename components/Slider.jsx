import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Slide from './Slide';
import Arrow from '../components/Arrow';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Slider() {
  const sliderRef = useRef();
  const slideNextToggle = () => {
    sliderRef.current.swiper.slideNext();
  }
  const slidePrevToggle = () => {
    sliderRef.current.swiper.slidePrev();
  }
  return (
    <>
      <div className='slide'>
        <Swiper
          ref={sliderRef}
          spaceBetween={50}
          slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          loop={true}
        >
          <SwiperSlide>
            <div className="slide__wrap">
              <div className='slide__arrow--left'>
                <Arrow />
              </div>
              <div className='slide__arrow--right'>
                <Arrow />
              </div>
              <Slide img="/default.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide__wrap">
              <div className='slide__arrow--left'>
                <Arrow />
              </div>
              <div className='slide__arrow--right'>
                <Arrow />
              </div>
              <Slide img="/default.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide__wrap">
              <div className='slide__arrow--left'>
                <Arrow />
              </div>
              <div className='slide__arrow--right'>
                <Arrow />
              </div>
              <Slide img="/default.png" />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      <div className="slide__row">
        <button className="slide__btn" onClick={slideNextToggle}><FaArrowLeft /></button>
        <div className="slide__numbers">
          <span className="slide__number">1</span>
          <span className="slide__symbol">/</span>
          <span className="slide__number--small">15</span>
        </div>
        <button className="slide__btn" onClick={slidePrevToggle}><FaArrowRight /></button>
      </div>
      <style jsx>
        {`
         .slide{
           box-sizing: border-box;
           margin: 0 auto;
           display: flex;
           justify-content: center;
           align-items: center;
           background: var(--color-back);
           padding-top: 3.125rem;
           min-height: 70vh;
           width: 100%;
           border: 1px solid #000;
         }
         .slide__wrap{
           position: relative;
           padding-top: 4rem;
           width: 99%;
           min-height: 43vh;
           padding-bottom: 3.125rem;
           margin: 0 auto;
           text-align: center;
           background: var(--color-back);
           border: 1px solid orange;
         }
         .slide__row{
           display: flex;
           justify-content: center;
           align-items: center;
           padding-bottom: 6.25rem;
         }
         .slide__btn{
           margin: 0 1.375rem;
           display: flex;
           justify-content: center;
           align-items: center;
           border: 0.125rem solid var(--color-main);
           color: var(--color-main);
           border-radius: 0.3125rem;
           padding: 0.625rem 1.125rem;
         }
         .slide__btn:hover{
            background: var(--color-main);
            color: #fff;
            cursor: pointer;
         }
         .slide__numbers{
           display: flex;
           color: var(--color-second);
           font-family: var(--font-regular);
           font-size: 0.875rem;
         }
         .slide__number--small{
            font-size: 0.625rem;
            padding-top: 0.3125rem;
         }
         .slide__arrow--left{
           position: absolute;
           top: 2.0625rem;
           left: 2.0625rem;
           z-index: -2;
         }
         .slide__arrow--right{
           position: absolute;
           bottom: 1.25rem;
           right: 1.875rem;
           z-index: -2;
           transform: rotateZ(180deg);
         }
         @media screen and (min-width: 1140px){
          .slide__arrow--left{
           position: absolute;
           top: 0;
           left: 0;
           z-index: 5;
          }
          .slide__arrow--right{
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 5;
            transform: rotateZ(180deg);
          }
          .slide{
            width: 65vw;
          }
          .slide__wrap{
            width: 49vw;
          }
         }

        `}
      </style>
    </>
  )
}
