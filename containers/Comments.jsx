import Slider from '../components/Slider'
import style from '../styles/comments.module.css'
import UnderlineTitle from '../components/UnderlineTitle'
import Button from '../components/Button'

export default function Comments() {
  return (
    <section className={style.comments}>
        <div className={style.comments__container}>
          <UnderlineTitle
            text="Отзывы"
            color="var(--color-second)"
            fontSize="36"
            underWidthProcent="72"
            underHeightPx="5"
            position="0"
            mediaSize="42"
          />
          <div className={style.comments__buttons}>
            <Button 
              text="Все отзывы"
              fontSize="16"
              color="var(--color-main)"
              paddingVertical="15"
              paddingHorizont="35"
              borderColor="var(--color-main)"
              borderRadius="12"
            />
          </div>
        </div>
       <Slider/>
    </section>
  )
}
