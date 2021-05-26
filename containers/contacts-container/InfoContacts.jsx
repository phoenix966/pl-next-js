import Accordeon from "../../components/contacts-components/Accordeon";

export default function InfoContacts() {
  return (
    <section className="info">
      <div className="info__container">
        <div className="info__wrapper">
          <div className="info__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.8323565996584!2d74.59365622514144!3d42.87638244224203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb73eb4d5f28d%3A0x7cdb9886d7917fb8!2z0J_Qu9GBIDk4!5e0!3m2!1sru!2skg!4v1621924155636!5m2!1sru!2skg" 
            // width="600" 
            // height="450" 
            // style="border:0;" 
            style={{border: '0',width: '100%',height: '100%'}}
            allowFullScreen={true} 
            loading="lazy">
            </iframe>
          </div>
        </div>
        <div className="info__wrapper">
          <h2 className="info__title">Обращайтесь по номерам</h2>
          <Accordeon open={true}/>
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
            max-width: 1640px;
            padding: 0 5px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
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
            max-width: 700px;
            height: 557px;
          }
          .info__wrapper{
            flex: 1 1 40%;
            margin: 0 25px;
            max-width: 100%;
            margin-bottom: 20px;
          }
          @media screen and (min-width: 1140px){
            .info__container{
              padding: 0 20px;
              flex-direction: row;
            }
            .info__wrapper{
              margin-bottom: 0;
            }
          }
        `}
      </style>
    </section>
  )
}
