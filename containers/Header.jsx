import BurgerIcon from "../components/Burger";
import LangBox from "../components/LangBox";
import Logo from "../components/Logo/Logo";
import Search from "../components/Search";
import style from '../styles/header.module.css'


export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <Logo/>
        <div className={style.header__wrapper}>
          <Search/>
          <BurgerIcon/>
        </div>
          <LangBox/>
      </div>
    </header>
  )
}
