import Link from 'next/link';
import Crumb from "./Crumb";
import NavChevron from './NavChevron';

export default function BreadCrumbs({marginBottom,paddingTop,firstText,secondText}) {
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
          <Crumb text={firstText}/>
        </li>
        <NavChevron />
        <li className="nav__element">
          <Crumb text={secondText} />
        </li>

      </ul>
      <style jsx>
        {`
            .nav{
              display: flex;
              align-items: center;
              height: 1.9375rem;
            }
            .nav__container{
              max-width:  1640px;
              padding-top: ${paddingTop}px;
              margin: 0 auto;
              margin-bottom: ${marginBottom}px;
              visibility: hidden;
            }
            .nav__main{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 1.9375rem;
              height: 1.9375rem;
              background: #E3E4EB;
              border-radius: 0.25rem;
            }
            .nav__picture{
              width: 0.875rem;
              height: 0.875rem;
            }
            .nav__img{
              object-position: center;
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
            @media screen and (min-width: 728px){
              .nav__container{
                max-width:  1640px;
                padding-top: ${paddingTop}px;
                margin: 0 auto;
                margin-bottom: ${marginBottom}px;
                visibility: visible;
              }
            }
          `}
      </style>
    </div>
  )
}
