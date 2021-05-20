

export default function Social() {
  return (
    <div className="social">
      <span className="icon-instagram social__icon"></span>
      <span className="icon-facebook social__icon"></span>
      <span className="icon-twitter social__icon"></span>
      <style jsx>
        {`
          .social{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            font-size: 24px;
            color: #fff;
            width: 24px;
            height: 112px;
            margin-right: -10px;
          }
        `}
      </style>
    </div>
  )
}
