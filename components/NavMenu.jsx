import Link from 'next/link';
import {useState} from 'react';


export default function NavMenu({show}) {
  const [open,setOpen] = useState(false)
  const toggle = ['nav__menu list--reset', 'nav__menu--closed']
  
  if(open){
    toggle.push('nav__menu--open')
  } else{
    toggle.splice(3,1)
  }

  const isOpen = (e) =>{
    e.preventDefault();
    if(open){
      setOpen(false);
    } else{
      setOpen(true);
    }
  };

  return (
  <>
    <nav className={`nav ${show ? 'active' : ' '}`}>
      <ul className="nav__menu list--reset">
        <li className="nav__row">
          <Link href="/">
            <a  className="nav__link">Главная</a>
          </Link>
        </li>
        <li className="nav__row">
          <Link href="#fg">
            <a  onClick={isOpen} className="nav__link">О нас <span className="icon-chevron-left"></span></a>
          </Link>
        </li>
        <li className="nav__row">
          <Link href="/inner">
            <a  className="nav__link">Внутренняя страница</a>
          </Link>
        </li>
        <li className="nav__row">
          <Link href="/vacancy">
            <a  className="nav__link">Вакансии</a>
          </Link>
        </li>
        <li className="nav__row">
          <Link href="/teachers">
            <a  className="nav__link">Преподаватели</a>
          </Link>
        </li>
        <li className="nav__row">
          <Link href="#fg">
            <a  className="nav__link">Партнерам</a>
          </Link>
        </li>
        <li className="nav__row">
          <Link href="#fg">
            <a  className="nav__link">Абитуриенты</a>
          </Link>
        </li>
      </ul>

      <ul className={toggle.join(' ')}>    
        <li className="nav__row nav__row--main">
            <a href="#fg" onClick={(e)=> isOpen(e)} className="nav__link "><span className="icon-arrow-left"></span>О нас</a>
        </li>
        <li className="nav__row">
          <Link href="#fg">
            <a  className="nav__link nav__link--show">Вакансии</a>
          </Link>
        </li>
        <li className="nav__row">
          <Link href="#fg">
            <a  className="nav__link">Новости</a>
          </Link>
        </li>
        <li className="nav__row">
          <Link href="#fg">
            <a  className="nav__link">Абитуриентам</a>
          </Link>
        </li>
      </ul>

    </nav>
    <style jsx>
      {`
        .nav.active{
          position: absolute;
          top: 8.125rem;
          right: 0;
          z-index: 90;
          width: 25rem;
          height: 100vh;
          background: #FFFFFF;
          box-shadow: inset 0 0.125rem 0 #2575E6;
          transition: 0.5s;

        }
        .nav{
          position: absolute;
          top: 8.125rem;
          right: -56.25rem;
          z-index: -2;
          width: 25rem;
          height: 280vh;
          background: #FFFFFF;
          box-shadow: inset 0 0.125rem 0 #2575E6;
          transition: 0.5s;
        }
        .nav__menu{
          height: 100%;
          display: flex;
          justify-content: flex-start;
          padding-top: 1.875rem;
          align-items: center;
          flex-direction: column;
          z-index: 89;
        }
        
        .nav__menu--closed{
          display: none;
        }
        .nav__menu--open{
          display: unset;
          position: absolute;
          top: 0.1875rem;
          z-index: 99;
          background: #fff;
          width: 100%;
        }
        .nav__row{
          margin: 1.25rem;
        }
        .nav__link{
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--color-logo);
          font-family: var(--font-regular);
          font-size: 1.125rem;
        }
        .nav__row--main{
          margin-bottom: 2.5rem;
        }
        .nav__row--main .nav__link{
          position: relative;
          color: var(--color-main);
          font-size: 1.5rem;
          text-transform: uppercase;
        }
        .nav__row--main .nav__link span{
          position: absolute;
          top: 0;
          left: -2.5rem;
        }
        @media screen and (min-width: 428px){
          .nav__menu{
            align-items: flex-start;
          }
          .nav__row{
            padding-left: 2.5rem;
          }
        }
        
      `}
    </style>
  </>
  )
}
