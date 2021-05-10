
export default function Slide({img}) {
  return (
    <div className="slide__box">
      <div className="slide__picture">
        <img src={img} alt="avatar" className="slide__img" />
      </div>
      <div className="slide__wrap">
        <h3 className="slide__title">Айтматов Адилет</h3>
        <div className="slide__wrapper">
          <span className="icon-dialog"></span>
          <span className="icon-dialog"></span>
        </div>
        <p className="slide__text">
          Моя цель учится в чешском техническом университете появилась в начале 11 класса, тогда я поступил в профессиональный лицей номер 98 по специализации Фронт Энд разработчик. Учеба там была очень интересная и по моему мнению более полезная чем учеба в школе. Моим учителем был Сомятов А В. Это был один из лучших преподавателей. Сомятов А. В прекрасный учитель. Всегда помогал если что то не получается. Также помогал когда я начал работать в Намбасофт. По окончанию учебы меня пригласили в компанию Намбасофт где я работал и зарабатывал опыт. Сейчас я работаю в этой компании удаленно. Это мне очень помогает поддерживать знания которыми я овладел в этой компании. Всем советую учебу в профессиональном лицее номер 98.
        </p>
      </div>
      <style jsx>
        {`
          .slide__picture{
            margin: 0 auto;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 1px solid #000;
            transform: translateY(-50px);
            border: 5px solid #FFFFFF;
            box-sizing: border-box;
            filter: drop-shadow(0px 4.53741px 18.1496px #F2F5FA), drop-shadow(0px 4.53741px 18.1496px #F2F5FA), drop-shadow(0px 4.53741px 18.1496px #F2F5FA);
          }
          .slide__img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }
          .slide__box{
            padding: 0 20px 20px 20px;
            width: 647px;
            height: 367px;
            margin: 0 auto;
            background: #FFFFFF;
            box-shadow: 0px 4.53741px 18.1496px #F2F5FA, 0px 4.53741px 18.1496px #F2F5FA, 0px 4.53741px 18.1496px #F2F5FA;
            border-radius: 25px;
          }
          .slide__title{
            font-family: var(--font-medium);
            color: var(--color-second);
            font-size: 18px;
            line-height: 21px;
            margin-bottom: 15px;
          }
          .slide__text{
            font-family: var(--font-light);
            color: #858688;
            font-size: 14px;
          }
          .slide__wrapper span{
            color: var(--color-main);
          }
          .slide__wrapper{
            margin-bottom: 20px;
          }
          .slide__wrapper span{
            margin: 0 4px;
          }
        `}
      </style>
    </div>
  )
}