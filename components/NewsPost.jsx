import Button from '../components/Button'

export default function NewsPost() {
  return (
    <li className="news-post">
      <div className="news-post__picture">
        <img src="/news-back.jpg" alt="news" className="news-post__img"/>
        <div className="news-post__wrapper">
          <div className="news-post__text">
            <span className="icon-eye"></span>
            2454
          </div>
          <div className="news-post__text">
            <span className="icon-calendar"></span>
            14/04/2021
          </div>
        </div>
      </div>
      <p className="news-post__title">Состоялось открытие нового It направления</p>
      <Button 
            text="Подробнее..."
            fontSize="16"
            color="var(--color-main)"
            paddingVertical="15"
            paddingHorizont="35"
            borderColor="var(--color-main)"
            borderRadius="12"
            margin="20"
          />
          <style jsx>
            {`
              .news-post{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                width: 350px;
                height: 415px;
                border-radius: 25px;
                background: #FFFFFF;
                box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
                overflow: hidden;
              }
              .news-post__picture{
                position: relative;
                width: 100%;
                height: 60%;
              }
              .news-post__img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-top-left-radius: 25px;
                border-top-right-radius: 25px;
              }
              .news-post__wrapper{
                position: absolute;
                width: 100%;
                bottom: 30px;
                left: 0;
                display: flex;
                justify-content: space-between;
              }
              .news-post__text{
                display: flex;
                justify-content: center;
                align-items: center;
                background: #00000080;
                margin: 0 10px;
                color: #fff;
                padding: 10px 15px;
                border-radius: 5px;
              }
              .news-post__text span{
                margin-right: 6px;
              }
              .news-post__title{
                font-family: var(--font-bold);
                font-size: 20px;
                padding: 0 15px;
                color: var(--color-second);
              }
            `}
          </style>
    </li>
  )
}
