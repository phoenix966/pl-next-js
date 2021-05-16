

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
            padding: 6px 11px;
            background: rgba(255, 255, 255, 0.3);
            drop-filter: blur(40px);
            border-radius: 5px 5px 0px 0px;
          }
          .calendar__icon{
            font-size: 24px;
            color: #fff;
            margin-right: 8px; 
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .calendar__text{
            font-family: var(--font-light);
            font-size: 16px;
            color: #fff;
            margin-left: 10px;
          }
        `}
      </style>
    </div>
  )
}
