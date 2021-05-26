import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import {useState,useEffect} from 'react';
import SpoilerInner from '../vacancy-components/SpoilerInner';

export default function Spoiler({text,title,par,list,open}) {
  const [active,setActive] = useState(false);
  const openOnClick = () =>{
    active ? setActive(false) : setActive(true);
  }
  useEffect (()=>{
    if(open){
      setActive(true)
    }
  },[])
  return (
    <div className="spoiler">
      <div className="spoiler__header">
        <p className="spoiler__name">{ text }</p>
        <div onClick={openOnClick} className="spoiler__icon">
          {active ? <FaChevronUp/> : <FaChevronDown/>}
        </div>
      </div>
      <div className='spoiler__inner'>
         <SpoilerInner list={list} par={par} title={title} actived={active} innerClick={openOnClick}/>
      </div>
      <style jsx>
        {`
          .spoiler{
            max-width: 49.375rem;
            margin: 0.25rem 0;
          }
          .spoiler__header{
            max-width: 100%;
            max-height: 3.375rem;
            padding: 0.9375rem 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--color-crumbs);
          }
          .spoiler__name{
            font-family: var(--font-vacancy-bold);
            font-size: 1.125rem;
            line-height: 1.5rem;
            color: #fff;
          }
          .spoiler__icon{
            color: #fff;
          }
          .spoiler__icon{
            cursor: pointer;
          }
          .spoiler__inner{
            max-width: 49.375rem;  
          }
        `}
      </style>
    </div>
  )
}
