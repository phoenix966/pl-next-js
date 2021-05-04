
export default function RatingStar() {
  return (
    <div className="rating">
      <div className="rating__stars">
        <span className="icon-star-full"></span>
        <span className="icon-star-full"></span>
        <span className="icon-star-full"></span>
        <span className="icon-star-full"></span>
        <span className="icon-star-half"></span>
        <p className="rating__text">(4.5) Рейтинг</p>
      </div>
      <style jsx>
        {`
          .rating{
            display: flex;
            justify-content: space-between; 
            padding: 0 15px;
          }
          .rating__stars{
            position: relative;
            display: flex;
            align-items: center;
            color: yellow;
            font-size: 18px;
            margin-bottom: 21px;
          }
          .rating__stars:after{
            content: '';
            position: absolute;
            top: 40px;
            left: 0;
            width: 130%;
            height: 1px;
            background: #D6D8E5;
          }
          .rating__stars span{
            margin-right: 10px;
          }
          .rating__text{
            font-family: var(--font-light);
            font-size: 16px;
            color: #D6D8E5;
            margin-left: 10px;
          }
        `}
      </style>
    </div>
  )
}
