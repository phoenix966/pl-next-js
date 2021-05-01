
export default function LangBox() {
  return (
    <>
      <div className="lang">
        <button className="lang__btn">
          <span className="lang__text">RU</span>
        </button>
      </div>
      <style jsx>
        {`
          .lang{
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 40px;
            right: -20px;
            transform: rotateZ(45deg);
            box-sizing: border-box;
            width: 49px;
            height: 49px;
            background: rgba(242, 242, 245, 0.4);

          }
          .lang__btn{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 41px;
            height: 41px;
            background: var(--color-backgr);
            border: none;
            cursor: pointer;
            box-sizing: border-box;
          }
          .lang__text{
            color: #39393980;
            font-family: var(--font-regular);
            font-size: 12px;
            transform: rotateZ(-45deg);
            padding-right: 20px;
          }
        `}
      </style>
    </>
  )
}
