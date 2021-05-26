import {useEffect,useState} from 'react';
import {FaChevronDown} from 'react-icons/fa';
import SpoilerVacancyList from './SpoilerVacancyList';

export default function SpoilerInner({actived,title,par,list,innerClick}) {
  const [isOpen,setIsOpen] = useState(false);
  
  useEffect(()=>{
    actived ? setIsOpen(true) : setIsOpen(false);
  },[actived])
  
  return (
    <div className='inner'>
      <h3 className="inner__title">{title} <span onClick={innerClick} className="inner__icon"><FaChevronDown/></span></h3>
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
            max-width: 49.6875rem;
            min-height: 30.3125rem;
            padding: 0.9375rem 1rem 0 1rem;
          }
          .inner__title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: var(--font-vacancy-bold);
            font-size: 1.125rem;
            color: var(--color-crumbs);
            line-height: 1.5rem;
            margin-bottom: 1.5625rem;
          }
          .inner__text{
            font-family: var(--font-vacancy-regular);
            font-size: 1rem;
            line-height: 1.5rem;
            color: var(--color-crumbs);
            background: #fff;
            padding: 1.875rem;
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
