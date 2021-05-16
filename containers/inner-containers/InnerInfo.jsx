import Calendar from '../../components/inner-components/Calendar';
import Social from '../../components/inner-components/Social';
import css from '../../styles/inner-styles/inner-info.module.css';

export default function InnerInfo() {
  return (
    <section className={css.innerInfo}>
      <div className={css.innerInfo__container}>
        <div className={css.innerInfo__row}>
          <h1 className={css.innerInfo__title}>Заголовок внутренней статьи</h1>
          <Social />
        </div>
        <div className={css.innerInfo__wrap}>
          <Calendar />
        </div>
      </div>
    </section>
  )
}
