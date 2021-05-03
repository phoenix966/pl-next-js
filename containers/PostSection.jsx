import UnderlineTitle from '../components/UnderlineTitle'
import Button from '../components/Button'
import style from '../styles/post-section.module.css'
import Post from '../components/Post'

export default function PostSection() {
  return (
    <section className={style.postSection}>
      <div className={style.postSection__container}>
        <div className={style.PostSection__wrapper}>
          <UnderlineTitle
            text="Профессии"
            color="#000"
            fontSize="42"
            underWidthProcent="80"
            underHeightPx="5"
          />
          <Button 
            text="Все курсы"
            fontSize="16"
            color="var(--color-main)"
            paddingVertical="15"
            paddingHorizont="35"
            borderColor="var(--color-main)"
            borderRadius="12"
          />
        </div>
        <Post/>
      </div>
      
    </section>
  )
}
