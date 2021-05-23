import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import {Children, useState} from 'react';
import SpoilerInner from '../vacancy-components/SpoilerInner';

export default function Spoiler({text,title,par,list}) {
  const [active,setActive] = useState(false);
  const openOnClick = () =>{
    active ? setActive(false) : setActive(true);
  }
  return (
    <div className="spoiler">
      <div className="spoiler__header">
        <p className="spoiler__name">{ text }</p>
        <div onClick={openOnClick} className="spoiler__icon">
          {active ? <FaChevronUp/> : <FaChevronDown/>}
        </div>
      </div>
      <div className='spoiler__inner'>
         <SpoilerInner list={list} par={par} title={title} actived={active}/>
      </div>
      <style jsx>
        {`
          .spoiler{
            max-width: 790px;
            margin: 4px 0;
          }
          .spoiler__header{
            max-width: 100%;
            max-height: 54px;
            padding: 15px 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--color-crumbs);
          }
          .spoiler__name{
            font-family: var(--font-vacancy-bold);
            font-size: 18px;
            line-height: 24px;
            color: #fff;
          }
          .spoiler__icon{
            color: #fff;
          }
          .spoiler__icon{
            cursor: pointer;
          }
          .spoiler__inner{
            max-width: 790px;  
          }
        `}
      </style>
    </div>
  )
}
