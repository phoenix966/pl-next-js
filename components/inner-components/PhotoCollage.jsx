import css from '../../styles/inner-styles/collage.module.css';

export default function PhotoCollage() {
  return (
    <div className={css.collage}>
      <div className={css.collage__wrapper}>
        <div className={css.collage__picture}></div>
        <div className={css.collage__picture}></div>
        <div className={css.collage__picture}></div>
        <div className={css.collage__picture}></div>
        <div className={css.collage__picture}></div>
        <div className={css.collage__picture}></div>
        <div className={css.collage__picture}></div>
        <div className={css.collage__picture}></div>
      </div>
    </div>
  )
}
