import style from '../styles/footer.module.css'
import Button from '../components/Button'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
          <ul className={style.footer__columns}>
            <li className={style.footer__item}>
              <h1 className={style.footer__title}>Навигация</h1>
              <p className={style.footer__text}>Главная</p>
              <p className={style.footer__text}>Абитуриентам</p>
              <p className={style.footer__text}>Вакансии</p>
              <p className={style.footer__text}>Партнеры</p>
            </li>
            <li className={style.footer__item}>
              <h1 className={style.footer__title}>Контакты</h1>
              <p className={style.footer__text}>(+996 312) 61-29-05</p>
              <p className={style.footer__text}>+996 55744 42 82</p>
              <p className={style.footer__text}>+996 50744 42 82</p>
              <p className={style.footer__text}>info@pls998.kg</p>
            </li>
            <li className={style.footer__item}>
              <h1 className={style.footer__title}>Соц сети</h1>
              <p className={style.footer__text}><span className=""></span>Instagram</p>
              <p className={style.footer__text}><span className=""></span>Facebook</p>
              <p className={style.footer__text}><span className=""></span>Twitter</p>
            </li>
            <li className={style.footer__item}>
              <h1 className={style.footer__title}>Онлайн заявка</h1>
              <Button 
                text="Записаться"
                fontSize="24"
                color="#fff"
                paddingVertical="20"
                paddingHorizont="60"
                borderColor="var(--color-main)"
                borderRadius="10"
                background="var(--color-main)"
              />
            </li>
          </ul>
      </div>
    </footer>
  )
}
