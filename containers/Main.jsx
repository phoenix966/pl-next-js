import style from '../styles/main.module.css'

export default function Main() {
  return (
    <main className={style.main}>
      <div className={style.main__container}>
          <h2 className={style.main__title}>Будущее наступило, ключи у нас!</h2>
          <p className={style.main__text}>Миссия Профессионального лицея Коммуникаций и Информационных Технологий заключается в предоставлении качественных образовательных услуг для гармоничного развития личности и как специалиста для рынка труда Кыргызской Республики.</p>
      </div>
    </main>
  )
}
