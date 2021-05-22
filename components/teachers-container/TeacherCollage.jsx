
export default function TeacherCollage() {
  return (
    <section className="collage">
      <div className="collage__container">
        <div className="collage__wrapper">
          <div className="collage__item"><img src="/teachers/teacher.jpg" alt="ava" className="collage__img" /></div>
          <div className="collage__item"><img src="/teachers/teacher.jpg" alt="ava" className="collage__img" /></div>
          <div className="collage__item"><img src="/teachers/teacher.jpg" alt="ava" className="collage__img" /></div>
          <div className="collage__item"><img src="/teachers/teacher.jpg" alt="ava" className="collage__img" /></div>
          <div className="collage__item"><img src="/teachers/teacher.jpg" alt="ava" className="collage__img" /></div>
          <div className="collage__item"><img src="/teachers/teacher.jpg" alt="ava" className="collage__img" /></div>
          <div className="collage__item"><img src="/teachers/teacher.jpg" alt="ava" className="collage__img" /></div>
          <div className="collage__item"><img src="/teachers/teacher.jpg" alt="ava" className="collage__img" /></div>
        </div>
      </div>
      <style jsx>
        {`
          .collage__container{
            max-width: 1600px;
            margin: 0 auto;
          }
          .collage__wrapper{
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4,minmax(75px,375px));
            grid-template-rows: repeat(2,minmax(75px,375px));
            grid-gap: 40px;
          }
          .collage__item{
            box-shadow: 0px 4.53741px 18.1496px #F2F5FA, 0px 4.53741px 18.1496px #F2F5FA, 0px 4.53741px 18.1496px #F2F5FA;
            overflow: hidden;
          }
          .collage__img{
            border-radius: 10px;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

        `}
      </style>
    </section>
  )
}
