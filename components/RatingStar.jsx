
export default function RatingStar({rate}) {
  const rating = rate;
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
          }
          .rating__stars{
            position: relative;
            display: flex;
            align-items: center;
            color: yellow;
            font-size: 1.125rem;
            margin-bottom: 0.9375rem;
          }
          .rating__stars:after{
            content: '';
            position: absolute;
            top: 2.5rem;
            left: -0.3125rem;
            width: 177%;
            height: 0.0625rem;
            background: #D6D8E5;
          }
          .rating__stars span{
            margin-right: 0.625rem;
          }
          .rating__text{
            font-family: var(--font-light);
            font-size: 1rem;
            color: #D6D8E5;
            margin-left: 0.625rem;
          }
        `}
      </style>
    </div>
  )
}
