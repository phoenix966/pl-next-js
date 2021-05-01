
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
            top: 2.5rem;
            right: -1.25rem;
            transform: rotateZ(45deg);
            box-sizing: border-box;
            width: 3.0625rem;
            height: 3.0625rem;
            background: rgba(242, 242, 245, 0.4);

          }
          .lang__btn{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 2.5625rem;
            height: 2.5625rem;
            background: var(--color-backgr);
            border: none;
            cursor: pointer;
            box-sizing: border-box;
          }
          .lang__text{
            color: #39393980;
            font-family: var(--font-regular);
            font-size: 0.75rem;
            transform: rotateZ(-45deg);
            padding-right: 1.25rem;
          }
        `}
      </style>
    </>
  )
}
