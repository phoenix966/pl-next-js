import {useState} from 'react';
import NavMenu from './NavMenu';

export default function Burger() {
  const [active,setActive] = useState(false)
  const isClicked = () =>  {
    active ? setActive(false) : setActive(true);
  }
  return (
  <>
    <div onClick={isClicked} className={`burger ${active ? 'active' : null}`}> 
      <div className="burger__row"></div>
      <div className="burger__row"></div>
      <div className="burger__row"></div>
      <style jsx>
        {`
          .burger{
            position: relative;
            width: 24px;
            height: 19px;
          }
          .burger:hover{
            cursor: pointer;
          }
          .burger__row{
            position: absolute;
            width: 24px;
            height: 3px;
            background: var(--color-logo)
          }
          .burger__row:nth-of-type(1){
            top: 0;
            left: 0;
            transition: 0.4s;
          }
          .burger__row:nth-of-type(2){
            width: 16px;
            height: 3px;
            top: 8px;
            left: 0;
            transition: 0.2s;
          }
          .burger__row:nth-of-type(3){
            top: 16px;
            left: 0;
            transition: 0.4s;
          }
          .active .burger__row:nth-of-type(1) {
            transform: rotate(-45deg) translate(-4px, 6px);
          }

          .active .burger__row:nth-of-type(2) {
            opacity: 0;
          }

          .active .burger__row:nth-of-type(3) {
            transform: rotate(45deg) translate(-5px, -8px);
          }
        `}
      </style>
    </div>
    <NavMenu show={active}/>
  </>
  )
}
