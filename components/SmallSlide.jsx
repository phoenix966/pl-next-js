
export default function SmallSlide({img,filter}) {
  return (
    <div className="slider__wrap">
      <img src={img} alt="logo" className="slider__logo" />
      <style jsx>
        {`
          .slider__wrap{
            
          }
          .slider__logo{
            width: 100%;
            object-position: center;
            filter: brightness(${filter}%);
            cursor: pointer;
          }
        `}
      </style>
    </div>
  )
}
