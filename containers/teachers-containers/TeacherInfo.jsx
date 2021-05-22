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
            margin-bottom: 40px;
          }
          .teacherInfo__container{
            max-width: 1600px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            background: #FFFFFF;
            box-shadow: 0px 4.53741px 18.1496px #F2F5FA, 0px 4.53741px 18.1496px #F2F5FA, 0px 4.53741px 18.1496px #F2F5FA;
            border-radius: 10px;
            position: relative;
          }
          .teacherInfo__img{
            width: 100%;
          }
          .teacherTitle{
            font-family: var(--font-bold);
            font-size: 32px;
            color: var(--color-crumbs);
            line-height: 41.6px;
            letter-spacing: 1.5px;
            margin-bottom: 5px;
          }
          .teacherText{
            font-family: var(--font-regular);
            font-size: 24px;
            line-height: 31.2px;
            letter-spacing: 1.4px;
            color: rgba(40, 41, 61, 0.5);
            margin-bottom: 40px;
          }
          .teacher__item{
            font-family: var(--font-regular);
            font-size: 1rem;
            color: var(--color-crumbs);
            line-height: 24px;
            margin-bottom: 8px;
          }
          .teacherInfo__picture{
            margin-right: 70px;
          }
          .teacherInfo__label{
            position: absolute;
            top: 10%;
            right: 2%;
          }
        `}
      </style>
    </section>
  )
}
