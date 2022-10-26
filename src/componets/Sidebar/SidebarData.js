import home from '../../assets/icons/menu/home.svg'
import search from '../../assets/icons/menu/search.svg'
import tables from '../../assets/icons/menu/tables.svg'
import calendar from '../../assets/icons/menu/calendar.svg'
import location from '../../assets/icons/menu/location.svg'
import widgets from '../../assets/icons/menu/widgets.svg'
import settings from '../../assets/icons/menu/settings.svg'
import person from '../../assets/icons/menu/person.svg'
import finance from '../../assets/icons/menu/finance.svg'
import exit from '../../assets/icons/menu/exit.svg'

export const SidebarData = [
  {
    title: 'Главная',
    path: '/',
    icon: home,
  },
  {
    title: 'Поиск адресов',
    path: '/address',
    icon: search,
  },
  {
    title: 'Таблицы',
    path: '/',
    icon: tables,
  },
  {
    title: 'Календарь',
    path: '/',
    icon: calendar,
  },
  {
    title: 'Карты',
    path: '/',
    icon: location,
  },
  {
    title: 'Виджеты',
    path: '/',
    icon: widgets,
  },
  {
    title: 'Настройки',
    path: '/',
    icon: settings,
    subNav: [
      {
        title: 'Настройки профиля',
        path: '/',
        icon: person,
      },
      {
        title: 'Управление финансами',
        path: '/',
        icon: finance,
      },
    ],
  },
  {
    title: 'Выход',
    path: '/',
    icon: exit,
  },
]
