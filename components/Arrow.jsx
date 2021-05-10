
export default function Arrow() {
  return (
  <>
    <div className="arrow">
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
      <div className="arrow__dot arrow__dot--hide"></div>
    </div>
    <style jsx>
      {`
        .arrow{
          display: grid;
          grid-template-rows: repeat(6,15px);
          grid-template-columns: repeat(6,15px);
        }
        .arrow__dot{
          width: 5px;
          height: 5px;
          border-radius: 50px;
          background: #64CCE3;

        }
        .arrow__dot--hide{
          opacity: 0;
        }
      `}
    </style>
  </>
  )
}
