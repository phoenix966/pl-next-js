import TeacherLabel from "../../components/teachers-container/TeacherLabel";


export default function TeacherInfo() {
  return (
    <section className='teacherInfo'>
      <div className='teacherInfo__container'>
        <div className='teacherInfo__picture'>
          <img src="/teachers/teacher.jpg" alt="teacher info" className='teacherInfo__img' />
        </div>
        <div className='teacherInfo__wrapper'>
          <h2 className="teacherTitle">Тууганбаева Мээрим Шамшидиновна</h2>
          <p className="teacherText">ЗАМ.ДИРЕКТОРА ПО УПМР</p>
          <ul className="teacher__list">
            <li className="teacher__item">Специалист по обеспечению высокого методического уровня по организации обучения</li>
            <li className="teacher__item">Специалист по психологическим основам обучения учащихся НПО</li>
            <li className="teacher__item">Специалист по организации и проведения выпускных квалификационных экзаменов с элементами независимой сертификации</li>
          </ul>
        </div>
        <div className="teacherInfo__label">
          <TeacherLabel text="Ментор / ЗОЖ / Зам УПМР" />
        </div>
      </div>
      <style jsx>
        {`
          .teacherInfo{
            margin-bottom: 2.5rem;
          }
          .teacherInfo__container{
            max-width: 1640px;
            padding: 0 0.3125rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #FFFFFF;
            box-shadow: 0px 0.2836rem 1.1343rem #F2F5FA, 0px 0.2836rem 1.1343rem #F2F5FA, 0px 0.2836rem 1.1343rem #F2F5FA;
            border-radius: 0.625rem;
            position: relative;
          }
          .teacherInfo__img{
            width: 100%;
          }
          .teacherTitle{
            font-family: var(--font-bold);
            font-size: 2rem;
            color: var(--color-crumbs);
            line-height: 2.6rem;
            letter-spacing: 0.0938rem;
            margin-bottom: 0.3125rem;
          }
          .teacherText{
            font-family: var(--font-regular);
            font-size: 1.5rem;
            line-height: 1.95rem;
            letter-spacing: 0.0875rem;
            color: rgba(40, 41, 61, 0.5);
            margin-bottom: 2.5rem;
          }
          .teacher__item{
            font-family: var(--font-regular);
            font-size: 1rem;
            color: var(--color-crumbs);
            line-height: 1.5rem;
            margin-bottom: 0.5rem;
          }
          .teacherInfo__label{
            position: absolute;
            top: 10%;
            right: 2%;
            z-index: -2;
          }
          @media screen and (min-width: 728px){
            .teacherInfo__container{
              padding: 0;
            }
          }
          @media screen and (min-width: 1140px){
            .teacherInfo__container{
              flex-direction: row;
              padding: 0 1.25rem;
            }
            .teacherInfo__picture{
              margin-right: 4.375rem;
            }
          }
            
          @media screen and (min-width: 1490px){
            .teacherInfo__label{
              z-index: 6;
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
