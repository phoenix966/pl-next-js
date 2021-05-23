import {FaPhone} from 'react-icons/fa';

export default function AccordeonList({title,name,phone}) {
  return (
    <li className="inner__item">
      <div className="item__wrapper">
        <h4 className="item__title">Директор</h4>
        <p className="item__text">Иманкулова Нурисат Увановна</p>
      </div>
      <div className="item__wrapper">
        <span className="item__icon"><FaPhone /></span>
        <span className="item__phone">0(312) 61-29-05</span>
      </div>
      <style jsx>
        {`
          .inner__item{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;
            padding: 30px;
            margin: 20px 0;
          }
          .item__wrapper:first-child{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
          .item__wrapper:last-child{
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .item__title{
            margin-bottom: 10px;
            font-family: var(--font-medium);
            color: var(--color-crumbs);
            font-size: 14px;
            line-height: 16.59px;
          }
          .item__text{
            font-family: var(--font-regular);
            font-size: 1rem;
            line-height: 24px;
            color: var(--color-crumbs);
          }
          .item__icon{
            margin-right: 10px;
            color: var(--color-crumbs);
          }
          .item__phone{
            font-family: var(--font-regular);
            font-size: 1rem;
            line-height: 24px;
            color: var(--color-crumbs);
          }
        `}
      </style>
    </li>
  )
}
