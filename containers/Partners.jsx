import SmallSlider from '../components/SmallSlider';
import UnderlineTitle from '../components/UnderlineTitle';
import style from '../styles/partners.module.css'

export default function Partners() {
  return (
    <section className={style.info}>
      <div className={style.info__container}>
        <div className={style.info__row}>
        <UnderlineTitle
              text="Наши партнеры"
              color="#000"
              fontSize="40"
              underWidthProcent="90"
              underHeightPx="5"
            />
        </div>
        <div className={style.info__wrapper}>
          <SmallSlider/>
        </div>
      </div>
    </section>
  )
}
