import logo from '../../assets/icons/header/logo.svg'
import person from '../../assets/icons/header/person.svg'

import style from './Header.module.scss'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <img className={style.logo__icon} src={logo} alt="logo" />
        <h1 className={style.logo__title}>Wrench CRM</h1>
      </div>
      <div className={style.header__person}>
        <img className={style.person__icon} src={person} alt="person" />
        <p className={style.person__name}>Имя Фамилия</p>
      </div>
    </header>
  )
}
export default Header
