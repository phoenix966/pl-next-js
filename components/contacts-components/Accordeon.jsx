import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import AccordeonList from './AccordeonList';
import {useState,useEffect} from 'react';

export default function Accordeon({open}) {
  const [active,setActive] = useState(false);

  const makeActive =()=>{
    active ? setActive(false) : setActive(true);
  };
  useEffect (()=>{
    if(open){
      setActive(true)
    }
  },[])
  return (
    <div className="accordeon">
      <div className="accordeon__inner">
        <div className="inner__row">
          <p className="inner__title">Приемная:</p>
          <span onClick={makeActive} className="inner__chevron"><FaChevronUp/></span>
        </div>
        <ul className="inner__list">
          <AccordeonList title="Директор" name="Иманкулова Нурисат Увановна" phone="0(312) 61-29-05" />
          <AccordeonList title="Директор" name="Иманкулова Нурисат Увановна" phone="0(312) 61-29-05" />
        </ul>
      </div>
      <div className="accordeon__head">
        <span className="head__title">Приемная:</span>
        <span onClick={makeActive} className="head__icon">{active ? <FaChevronUp/> : <FaChevronDown/>}</span>
      </div>
      <style jsx>
        {`
          .accordeon{
            max-width: 790px;
            margin: 5px 0;
          }
          .accordeon__head{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 16px;
            color: #fff;
            max-width: 790px;
            height: 54px;
            background: var(--color-crumbs);
            border-radius: 2px;
          }
          .accordeon__inner{
            display: ${active ? 'block' : 'none'};
            max-width: 790px;
            background: #2575E61A;
            height: 375px;
            padding: 15px;
            transition: 1s;
          }
          .inner__row{
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .inner__title{
            font-family: var(--font-vacancy-bold);
            font-size: 18px;
            color: var(--color-crumbs);
            line-height: 24px;
          }
          .inner__icon{
            color: var(--color-crumbs);
            cursor: pointer;
          }
          .inner__chevron{
            cursor: pointer;
          }
          .head__icon{
            cursor: pointer;
          }
          .inner__list{
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  )
}
