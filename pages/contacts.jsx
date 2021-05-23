import BreadCrumbs from '../components/inner-components/BreadCrumbs';
import Layout from '../containers/Layout';
import css from '../styles/contacts/contacts.module.css';
import UnderlineTitle from '../components/UnderlineTitle';
import InfoContacts from '../containers/contacts-container/InfoContacts';

export default function Contacts() {
  return (
    <div className="wrapper">
      <Layout>
        <section className={css.crumbs}>
          <div className="container">
            <BreadCrumbs firstText="Контакты" />
          </div>
        </section>
        <section className={css.contacts__row}>
          <div className={css.row__container}>
            <UnderlineTitle
              text="Контакты"
              color="var(--color-crumbs)"
              fontSize="42"
              underWidthProcent="60"
              underHeightPx="8"
              position="20"
            />
          </div>
        </section>
        <InfoContacts/>
      </Layout>
    </div>
  )
}
