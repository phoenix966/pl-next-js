import {useEffect,useState} from 'react';
import {FaChevronDown} from 'react-icons/fa';
import SpoilerVacancyList from './SpoilerVacancyList';

export default function SpoilerInner({actived,title,par,list}) {
  const [isOpen,setIsOpen] = useState(false);
  
  useEffect(()=>{
    actived ? setIsOpen(true) : setIsOpen(false);
  },[actived])
  return (
    <div className='inner'>
      <h3 className="inner__title">{title} <span className="inner__icon"><FaChevronDown/></span></h3>
      <p className="inner__text">
        {par}
      </p>
      <div className="inner__wrapper">
        {list.map((item)=>{
          return <SpoilerVacancyList name={item.title} markedList={item.list} key={item.title}/>
        })}
      </div>
      <style jsx>
        {`
          .inner{
            display: ${isOpen ? 'block' : 'none'};
            background: #2575E61A;
            max-width: 795px;
            min-height: 485px;
            padding: 15px 16px 0 16px;
          }
          .inner__title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: var(--font-vacancy-bold);
            font-size: 18px;
            color: var(--color-crumbs);
            line-height: 24px;
            margin-bottom: 25px;
          }
          .inner__text{
            font-family: var(--font-vacancy-regular);
            font-size: 1rem;
            line-height: 24px;
            color: var(--color-crumbs);
            background: #fff;
            padding: 30px;
          }
          
          .inner__wrapper{
            display: flex;
            flex-wrap: wrap;
          }
        `}
      </style>
    </div>
  )
}
