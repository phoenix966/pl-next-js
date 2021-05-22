import Layout from '../containers/Layout';
import css from '../styles/vacancy/vacancy.module.css';
import UnderlineTitle from '../components/UnderlineTitle';
import Spoiler from '../components/vacancy-components/Spoiler';
import SpoilerInner from '../components/vacancy-components/SpoilerInner';
import { useState } from 'react';
import BreadCrumbs from '../components/inner-components/BreadCrumbs';
import ColoredRow from '../components/inner-components/ColoredRow';

export default function vacancy() {
  const [list, setList] = useState([
    { title: 'Требования к кандидату:', list: ['Уверенно писать на PHP, или Node JS Опыт от 2х лет и более.', 'Опыт работы с PHP 7.0+', 'Знание HTML5, CSS, Javascript, JSON, JQuery', 'Понимание принципов ООП', 'MVC'] },
    { title: 'Стэк технологий курса:', list: ['Работа с фреймворками (Laravel, Symfony).', 'Базы данных MySQL и др.', 'Инструментов управления версиями кода'] },

  ])
  return (
    <div className="wrapper">
      <Layout>
        <section className="crumbs">
          <BreadCrumbs firstText="Вакансии" />
        </section>
        <section className={css.vacancy__row}>
          <UnderlineTitle
            text="Вакансии"
            color="var(--color-crumbs)"
            fontSize="42"
            underWidthProcent="60"
            underHeightPx="8"
            position="20"
          />
        </section>
        <section className={css.info}>
          <div className={css.info__container}>
            <div className={css.info__wrapper}>
              <Spoiler
                par='В команду преподавателей требуется ментор курса Back End разработки.
                  В связи с расширением преподавательского состава, проходит набор на должность Мастера производственного обучения по профессии Back - End разработчик.' title="Мастер группы Веб-программирование"
                text="Мастер группы Специалист по сетям связи и системам коммутаций"
                list={list}
              />
              <Spoiler
                par='В команду преподавателей требуется ментор курса Back End разработки.
                  В связи с расширением преподавательского состава, проходит набор на должность Мастера производственного обучения по профессии Back - End разработчик.' title="Мастер группы Веб-программирование"
                text="Мастер группы Специалист по сетям связи и системам коммутаций"
                list={list}
              />
              <Spoiler
                par='В команду преподавателей требуется ментор курса Back End разработки.
                  В связи с расширением преподавательского состава, проходит набор на должность Мастера производственного обучения по профессии Back - End разработчик.' title="Мастер группы Веб-программирование"
                text="Мастер группы Специалист по сетям связи и системам коммутаций"
                list={list}
              />
            </div>
            <div className={css.info__wrapper}>
              <div className={css.info__wrap}>
                <h3 className="info__title">Мы предлагаем</h3>
              </div>
              <ColoredRow text="стабильная заработная плата" dot="." />
              <ColoredRow text="молодой дружный коллектив" dot="." />
              <ColoredRow text="постоянное повышение квалификации" dot="." />
              <ColoredRow text="непрерывный процесс роста" dot="." />
              <ColoredRow text="трудоустройство по ТК КР" dot="." />
              <div className={css.info__wrap}>
                <h3 className="info__title">Обращайтесь по номерам</h3>
              </div>
              <div className={css.info__box}>
                <ColoredRow text="0(312) 61-29-05" dot="." />
                <ColoredRow text="0778 38 64 01" dot="." />
              </div>
              <div className={css.info__box}>
                <ColoredRow text="0778 38 64 01" dot="." />
                <ColoredRow text="0557 87 37 38" dot="." />
              </div>
            </div>

          </div>
        </section>
      </Layout>
    </div>
  )
}
