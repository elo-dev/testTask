import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

import style from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={style.layout}>
      <Header />
      <Sidebar />
      <main className={style.content}>
        <Outlet />
      </main>
    </div>
  )
}
export default Layout
