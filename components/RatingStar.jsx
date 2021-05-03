
export default function RatingStar() {
  return (
    <div className="rating">
      <div className="rating__stars">
        звездочки
      </div>
      <p className="rating__text">Рейтинг 4,5</p>
      <style jsx>
        {`
          .rating{
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  )
}
