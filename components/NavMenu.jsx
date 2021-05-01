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
          <Link href="#fg">
            <a  className="nav__link">Абитуриентам</a>
          </Link>
        </li>
        <li className="nav__row">
          <Link href="#fg">
            <a  className="nav__link">Вакансии</a>
          </Link>
        </li>
        <li className="nav__row">
          <Link href="#fg">
            <a  className="nav__link">Новости</a>
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
          top: 130px;
          right: 0;
          z-index: 90;
          width: 400px;
          height: 600px;
          background: #FFFFFF;
          box-shadow: inset 0px 2px 0px #2575E6;
          transition: 0.5s;

        }
        .nav{
          position: absolute;
          top: 130px;
          right: -900px;
          z-index: -2;
          width: 400px;
          height: 100vh;
          background: #FFFFFF;
          box-shadow: inset 0px 2px 0px #2575E6;
          transition: 0.5s;
        }
        .nav__menu{
          height: 100%;
          display: flex;
          justify-content: flex-start;
          padding-top: 30px;
          align-items: flex-start;
          flex-direction: column;
          z-index: 89;
        }
        .nav__menu--closed{
          display: none;
        }
        .nav__menu--open{
          display: unset;
          position: absolute;
          top: 3px;
          z-index: 99;
          background: #fff;
          width: 100%;
        }
        .nav__row{
          margin: 20px;
          padding-left: 40px;
        }
        .nav__link{
          display: flex;
          align-items: center;
          text-decoration: none;
          color: var(--color-logo);
          font-family: var(--font-regular);
          font-size: 18px;
        }
        .nav__row--main{
          margin-bottom: 40px;
        }
        .nav__row--main .nav__link{
          position: relative;
          color: var(--color-main);
          font-size: 24px;
          text-transform: uppercase;
        }
        .nav__row--main .nav__link span{
          position: absolute;
          top: 0;
          left: -40px;
        }
        
      `}
    </style>
  </>
  )
}
