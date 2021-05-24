import { FaArrowCircleDown } from 'react-icons/fa';

export default function Slide({ img }) {
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
      <div className="slide__icon">
        <FaArrowCircleDown />
      </div>
      <style jsx>
        {`
          .slide__picture{
            margin: 0 auto;
            width: 9.375rem;
            height: 9.375rem;
            border-radius: 50%;
            border: 1px solid #000;
            transform: translateY(-64px);
            border: 5px solid #FFFFFF;
            box-sizing: border-box;
            filter: drop-shadow(0px 0.2836rem 1.1343rem #F2F5FA), drop-shadow(0px 0.2836rem 1.1343rem #F2F5FA), drop-shadow(0px 0.2836rem 1.1343rem #F2F5FA);
          }
          .slide__img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }
          .slide__box{
            position: relative;
            padding: 0 1.25rem 1.25rem 1.25rem;
            width: 85%;
            height: 41vh;
            margin: 0 auto;
            margin-bottom: 2.8125rem;
            background: #FFFFFF;
            box-shadow: 0px 0.2836rem 1.1343rem #F2F5FA, 0px 0.2836rem 1.1343rem #F2F5FA, 0px 0.2836rem 1.1343rem #F2F5FA;
            border-radius: 1.5625rem;
            border: 1px solid blue;
          }
          .slide__title{
            font-family: var(--font-medium);
            color: var(--color-second);
            font-size: 1.125rem;
            line-height: 1.3331rem;
            margin-bottom: 0.9375rem;
          }
          .slide__text{
            font-family: var(--font-light);
            color: #858688;
            font-size: 0.875rem;
            height: 20vh;
            line-height: 1.4875rem;
            letter-spacing: 0.125rem;
            margin: 0 auto;
            overflow-x: scroll;
          }
          .slide__wrapper span{
            color: var(--color-main);
            margin: 0 0.25rem;
          }
          .slide__wrap{
            margin: 0 auto;
            height: 26vh;
            width: 100%;
            border: 1px solid red;
            margin-bottom: 2.5rem;
          }
          .slide__icon{
            position: absolute;
            bottom: -0.5625rem;
            right: 0;
            left: 0;
            margin: 0 auto;
            color: var(--color-main);
            font-size:  2rem;
            z-index: 3;
          }
          @media screen and (min-width: 1140px){
            .slide__box{
              width: 40vw;
            }
            .slide__wrap{
              width: 34vw;
            }
          }
        `}
      </style>
    </div>
  )
}
