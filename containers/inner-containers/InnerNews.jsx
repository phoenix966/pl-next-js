import ButtonLike from '../../components/inner-components/ButtonLike';
import ColoredRow from '../../components/inner-components/ColoredRow';
import PhotoCollage from '../../components/inner-components/PhotoCollage';
import css from '../../styles/inner-styles/innerNews.module.css';
import UnderlineTitle from '../../components/UnderlineTitle';
import NewsPost from '../../components/NewsPost';

export default function InnerNews() {
  return (
    <div className={css.innerNews}>
      <div className={css.innerNews__container}>
        <div className={css.innerNews__wrapper}>
          <div className={css.innerNews__wrap}>
            <p className={css.innerNews__text}>
              <ButtonLike />
              16 сентября ПЛКиИТ №98 провел встречу с партнерами и работодателями из сферы туризма, где обсуждались возможности внедрения профессий туристического направления «Агент по продаже туристических услуг», «Оператор в сфере туристических услуг», «Организатор путешествий» в систему начального профессионального образования.
              <br />
              <br />
              Участники круглого стола, а это ГП «Кыргыз Туризм», «Кыргыз Концепт», Ассоциация Курортов Кыргызстана, «Горы Азии», Ассоциация ведущих рестораторов и отельеров в КР, «Аксай трэвел», «Райан Тур», «Дайно Тур», предложили самые востребованные направления и квалификационную характеристику, которая соответствует требованиям работодателей.
              Они отметили, что предложенный подход к обучению отличается от ранее использованных в Кыргызской Республике. Было принято решение использовать программу обучения в соответствии со всеми требованиями работодателей, которые были прописаны участниками встречи.
              <br />
              <br />
              Инициативой внедрения профессий является МОТ (Международная организация труда) и Профессиональный лицей №98. Пилотный проект позволит распространить учебные программы по всей стране.
              </p>
          </div>
          <ColoredRow text="Истинная красота заключается всё-таки в чистоте сердца" />
          <PhotoCollage />
        </div>
        <div className={css.innerNews__box}>
          <div className={css.innerNews__underline}>
            <UnderlineTitle
              text="Последние новости"
              color="#000"
              fontSize="28"
              underWidthProcent="20"
              underHeightPx="5"
              mediaSize="32"
            />
          </div>
          <NewsPost
            title='Состоялось открытие нового It направления'
            imgSrc='/news-back.jpg'
            view='0'
            date='14/04/2021'
            margin="20"
            // key={post.date}
          />
          <NewsPost
            title='Состоялось открытие нового It направления'
            imgSrc='/news-back.jpg'
            view='0'
            date='14/04/2021'
            margin="20"
            // key={post.date}
          />
        </div>
      </div>
    </div>
  )
}
