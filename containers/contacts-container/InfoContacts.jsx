import Accordeon from "../../components/contacts-components/Accordeon";

export default function InfoContacts() {
  return (
    <section className="info">
      <div className="info__container">
        <div className="info__wrapper">
          <img src="/contacts/map.jpg" alt="map" className="info__map" />
        </div>
        <div className="info__wrapper">
          <h2 className="info__title">Обращайтесь по номерам</h2>
          <Accordeon/>
          <Accordeon/>
          <Accordeon/>
        </div>
      </div>
      <style jsx>
        {`
          .info{
            min-height: 60vh;
            margin-bottom: 100px;
          }
          .info__container{
            max-width: 1600px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
          }
          .info__title{
            font-family: var(--font-medium);
            font-size: 24px;
            line-height: 28.44px;
            color: var(--color-crumbs);
            text-align: center;
            margin-bottom: 50px;
          }
          .info__map{
            width: 100%;
            max-height: 684px;
          }
          .info__wrapper{
            flex: 1 1 40%;
            margin: 0 25px;
          }
        `}
      </style>
    </section>
  )
}
