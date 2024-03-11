import user from '../user'
import styles from './info.module.css'

type props = {
  user: user
}

export default function Info(props: props) {
  return (
    <div className={styles.card_info}>
      <h3>Мой профиль</h3>
      <div className={styles.client_info}>
        <h4 className={styles.client_title}>Мое имя</h4>
        <h5>{props.user.name}</h5>
        <h4 className={styles.client_title}>Номер телефона</h4>
        <h5>{props.user.phone}</h5>
        <h4 className={styles.client_title}>Почта</h4>
        <h5>{props.user.email}</h5>
      </div>
    </div>
  )
}