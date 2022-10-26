import { useEffect, useState } from 'react'

import Address from '../Address/Address'

import { fetchAddresses } from '../../services/addresses'

import searchIcon from '../../assets/icons/search/search.svg'

import style from './Search.module.scss'

const Search = () => {
  const [addresses, setAddresses] = useState([])
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    try {
      e.preventDefault()
      const address = await fetchAddresses(value)
      setAddresses(address.suggestions)
    } catch (error) {
      setError(error.data)
    }
  }

  return (
    <section className={style.search}>
      <h2 className={style.search__title}>Поиск адресов</h2>
      <p className={style.search__info}>Введите интересующий вас адрес</p>
      <form className={style.search__form} onSubmit={onSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          className={style.input}
          type="text"
          placeholder="Введите интересующий вас адрес"
        />
        <button
          className={style.btn}
          type={'submit'}
          disabled={value.length < 3}
        >
          <img src={searchIcon} alt="search" />
          <p>Поиск</p>
        </button>
      </form>
      <p className={style.error}>{error}</p>
      {!!addresses.length && <Address addresses={addresses} />}
    </section>
  )
}
export default Search
