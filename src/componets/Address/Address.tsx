import style from './Address.module.scss'

const Address = (props) => {
  return (
    <section className={style.address}>
      <h3 className={style.address__title}>Адреса</h3>
      <ul>
        {props?.addresses?.map(({ value }, index) => (
          <li className={style.address__item} key={index}>
            {value}
          </li>
        ))}
      </ul>
    </section>
  )
}
export default Address
