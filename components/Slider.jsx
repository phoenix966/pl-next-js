import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Slide from './Slide';
import Arrow from '../components/Arrow';
import { FaArrowLeft, FaArrowRight, FaArrowCircleDown } from 'react-icons/fa';

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
        <div className='slide__arrow--left'>
          <Arrow />
        </div>
        <div className='slide__arrow--right'>
          <Arrow />
        </div>
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
              <Slide img="/default.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide__wrap">
              <Slide img="/default.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide__wrap">
              <Slide img="/default.png" />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      <div className="slide__icon">
        <FaArrowCircleDown />
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
           position: relative;
           box-sizing: border-box;
           margin: 0 auto;
           display: flex;
           justify-content: center;
           align-items: center;
           background: var(--color-back);
           margin-bottom: 20px;
           width: 65vw;
           border: 1px solid #000;
         }
         .slide__wrap{
           padding-top: 50px;
           width: 58vw;
           height: 70vh;
           margin: 0 auto;
           text-align: center;
           background: var(--color-back);
           border: 1px solid orange;
         }
         .slide__row{
           display: flex;
           justify-content: center;
           align-items: center;
         }
         .slide__btn{
           margin: 0 10px;
           display: flex;
           justify-content: center;
           align-items: center;
           border: 2px solid var(--color-main);
           color: var(--color-main);
           border-radius: 5px;
           padding: 8px 17px;
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
           font-size: 14px;
         }
         .slide__number--small{
            font-size: 10px;
            padding-top: 5px;
         }
         .slide__arrow--left{
           position: absolute;
           top: 15px;
           left: 20px;
           z-index: 2;
         }
         .slide__arrow--right{
           position: absolute;
           bottom: 10px;
           right: 20px;
           z-index: 2;
           transform: rotateZ(180deg);
         }
         .slide__icon{
            display: flex;
            justify-content: center;
            color: var(--color-main);
            font-size:  32px;
            margin-bottom: 20px;
          }
         
        `}
      </style>
    </>
  )
}
