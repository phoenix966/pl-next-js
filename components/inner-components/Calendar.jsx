

export default function Calendar() {
  return (
    <div className="calendar">
      <span className="icon-calendar calendar__icon">
        <span className="calendar__text">14/04/2021</span>
      </span>
      <style jsx>
        {`
          .calendar{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.375rem 0.6875rem;
            background: rgba(255, 255, 255, 0.3);
            drop-filter: blur(40px);
            border-radius: 0.3125rem 0.3125rem 0px 0px;
          }
          .calendar__icon{
            font-size: 1.5rem;
            color: #fff;
            margin-right: 0.5rem; 
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .calendar__text{
            font-family: var(--font-light);
            font-size: 1rem;
            line-height: 1.5rem;
            letter-spacing: 0.0938rem;
            color: #fff;
          }
        `}
      </style>
    </div>
  )
}
