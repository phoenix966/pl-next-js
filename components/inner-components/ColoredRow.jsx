

export default function ColoredRow({text,dot}) {
  return (
    <div className="row">
      <p className="row__text"><span>{dot}</span>{text}</p>
      <style jsx>
        {`
          .row{
            width: 100%;
            height: 61px;
            border-left: 5px solid var(--color-main);
            margin: 10px 10px;
          }
          .row__text{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font-family: var(--font-regular);
            font-size: 14px;
            background: rgba(37, 117, 230, 0.11);
            border-radius: 0px 5px 5px 0px;
            color: #393939B2;
            height: 100%;
            width: 100%;
            padding-left: 25px;
            box-sizing: border-box;
          }
          .row__text span{
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #000000;
            font-size: 0;
            box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.3);
            margin: 0 14px;
          }
        `}
      </style>
    </div>
  )
}
