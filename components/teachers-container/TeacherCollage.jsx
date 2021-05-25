
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
            max-width: 1640px;
            margin: 0 auto;
            margin-bottom: 6.25rem;
            padding: 0 0.3125rem;
          }
          .collage__wrapper{
            width: 100%;
            display: block;
          }
          .collage__item{
            box-shadow: 0px 0.2836rem 1.1343rem #F2F5FA, 0px 0.2836rem 1.1343rem #F2F5FA, 0px 0.2836rem 1.1343rem #F2F5FA;
            overflow: hidden;
            margin-bottom: 0.625rem;
          }
          .collage__img{
            border-radius: 0.625rem;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
          @media screen and (min-width: 728px){
            .collage__container{
              padding: 0 1.25rem;
            }
          }
          @media screen and (min-width: 1140px){
            .collage__wrapper{
              display: grid;
              grid-template-columns: repeat(4,minmax(4.6875rem,23.4375rem));
              grid-template-rows: repeat(2,minmax(4.6875rem,23.4375rem));
              grid-gap: 2.5rem;
            }
            .collage__item{
              margin-bottom: 0;
            }
          }
          @media screen and (min-width: 1490px){
            .teacherInfo__container{
              padding: 0;
            }
          }

        `}
      </style>
    </section>
  )
}
