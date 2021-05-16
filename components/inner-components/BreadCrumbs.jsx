import Link from 'next/link';

import Crumb from "./Crumb";
import NavChevron from './NavChevron';

export default function BreadCrumbs({marginBottom,paddingTop}) {
  return (
    <div className="nav__container">
      <ul className="nav list--reset">
        <li className="nav__main">
          <div className="nav__picture">
            <Link href="/">
              <a ><img src="/Inner/Home.png" alt="home" className="nav__img" /></a>
            </Link>
          </div>
        </li>
        <NavChevron />
        <li className="nav__element">
          <Crumb text="Новости" />
        </li>
        <NavChevron />
        <li className="nav__element">
          <Crumb text="Внутренняя новость" />
        </li>

      </ul>
      <style jsx>
        {`
            .nav{
              display: flex;
              align-items: center;
              height: 31px;
            }
            .nav__container{
              max-width: 1140px;
              padding-top: ${paddingTop}px;
              margin: 0 auto;
              margin-bottom: ${marginBottom}px;
            }
            .nav__main{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 31px;
              height: 31px;
              background: #E3E4EB;
              border-radius: 4px;
            }
            .nav__picture{
              width: 14px;
              height: 14px;
            }
            .nav__img{
              object-position: center;
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
          `}
      </style>
    </div>
  )
}
