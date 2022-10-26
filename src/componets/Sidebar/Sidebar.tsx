import { useState } from 'react'
import { Link } from 'react-router-dom'

import { SidebarData } from './SidebarData'

import triangle from '../../assets/icons/menu/triangle.svg'

import style from './Sidebar.module.scss'

const Sidebar = () => {
  const [isSidebar, setIsSidebar] = useState(false)

  const showSubMenu = () => setIsSidebar(!isSidebar)

  return (
    <aside className={style.sidebar}>
      <nav className={style.nav}>
        <h2 className={style.sidebar__title}>Меню</h2>
        <ul>
          {SidebarData.map(({ title, path, icon, subNav }, index) => (
            <li
              key={index}
              className={style.nav__item}
              onClick={subNav && showSubMenu}
            >
              <div className={style.item}>
                <Link to={path}>
                  <img className={style.nav__icon} src={icon} alt={title} />
                  <p className={style.nav__title}>{title}</p>
                </Link>
                {subNav && (
                  <img
                    className={`${style.item__dropdown} ${
                      isSidebar ? style.item__dropdown__open : ''
                    }`}
                    src={triangle}
                    alt="drop"
                  />
                )}
              </div>
              <ul className={subNav && isSidebar ? style.submenu : null}>
                {isSidebar &&
                  subNav?.map(({ title, path, icon }, index) => (
                    <li className={style.nav__subItem} key={index}>
                      <Link to={path}>
                        <img
                          className={style.nav__icon}
                          src={icon}
                          alt={title}
                        />
                        <p className={style.nav__title}>{title}</p>
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
export default Sidebar
