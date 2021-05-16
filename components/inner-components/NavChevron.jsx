
export default function NavChevron() {
  return (
    <li className="nav__chevron">
      <span className="icon-chevron-right nav__icon"></span>
      <style jsx>
        {`
          .nav__chevron{
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 3px;
            margin-right: 18px;
          }
          .nav__icon{
              color: #28293D;
              font-size: 24px;
            }
        `}
      </style>
    </li>
  )
}
