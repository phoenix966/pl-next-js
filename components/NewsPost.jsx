import Button from '../components/Button'

export default function NewsPost({title,imgSrc,view,date,margin}) {
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
            paddingHorizont="92"
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
                border-radius: 1.5625rem;
                background: #FFFFFF;
                box-shadow: 0px 0px 1.875rem rgba(0, 0, 0, 0.1);
                overflow: hidden;
                margin-bottom: ${margin}px;
                margin: 0.625rem;
                
              }
              .news-post__picture{
                position: relative;
                width: 100%;
                height: 58%;
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
                margin: -0.5rem 1.3125rem;
                color: #fff;
                padding: 0.6875rem 1.3125rem;
                border-radius: 0.3125rem;
                font-size: 1rem;
              }
              .news-post__text span{
                margin-right: 0.375rem;
                font-size: 1.375rem;
              }
              .news-post__title{
                width: 90%;
                font-family: var(--font-bold);
                font-size: 1.375rem;
                letter-spacing: 0.0938rem;
                padding: 0 0.9375rem;
                padding-top: 1.125rem;
                color: var(--color-second);
              }
              @media screen and (min-width: 1064px){
                .news-post__picture{
                  width: 100%;
                  height: 66%;
                }
                .news-post{
                  flex: 1 1 40%;
                }
              }
              @media screen and (min-width: 1600px){
                .news-post{
                  flex: 1 1 30%;
                }
              }
            `}
          </style>
    </li>
  )
}
