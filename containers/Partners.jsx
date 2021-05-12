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
              fontSize="34"
              underWidthProcent="90"
              underHeightPx="5"
              mediaSize="40"
            />
        </div>
        <div className={style.info__wrapper}>
          <SmallSlider/>
        </div>
      </div>
    </section>
  )
}
