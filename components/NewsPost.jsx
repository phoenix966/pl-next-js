import Button from '../components/Button'

export default function NewsPost({title,imgSrc,view,date}) {
  return (
    <li className="news-post">
      <div className="news-post__picture">
        <img src={imgSrc} alt="news" className="news-post__img"/>
        <div className="news-post__wrapper">
          <div className="news-post__text">
            <span className="icon-eye"></span>
            {view}
          </div>
          <div className="news-post__text">
            <span className="icon-calendar"></span>
            {date}
          </div>
        </div>
      </div>
      <p className="news-post__title">{title}</p>
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
                width: 21.875rem;
                height: 25.9375rem;
                border-radius: 1.5625rem;
                background: #FFFFFF;
                box-shadow: 0px 0px 1.875rem rgba(0, 0, 0, 0.1);
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
                border-top-left-radius: 1.5625rem;
                border-top-right-radius: 1.5625rem;
              }
              .news-post__wrapper{
                position: absolute;
                width: 100%;
                bottom: 1.875rem;
                left: 0;
                display: flex;
                justify-content: space-between;
              }
              .news-post__text{
                display: flex;
                justify-content: center;
                align-items: center;
                background: #00000080;
                margin: 0 0.625rem;
                color: #fff;
                padding: 0.625rem 0.9375rem;
                border-radius: 0.3125rem;
              }
              .news-post__text span{
                margin-right: 0.375rem;
              }
              .news-post__title{
                font-family: var(--font-bold);
                font-size: 1.25rem;
                padding: 0 0.9375rem;
                color: var(--color-second);
              }
            `}
          </style>
    </li>
  )
}
