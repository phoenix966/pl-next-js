import style from '../styles/main.module.css'

export default function Main() {
  return (
    <div className={style.main}>
      <div className={style.main__container}>
          <h2 className={style.main__title}></h2>
          <p className={style.main__text}></p>
      </div>
    </div>
  )
}
