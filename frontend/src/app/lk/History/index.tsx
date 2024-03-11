import user from "../user"
import styles from './history.module.css'

type props = {
  user: user
}

export default function History(props: props) {

  const history = props.user.raspisanies?.data;
  const date = new Date();

  let past: Array<JSX.Element> = [];
  let future: Array<JSX.Element> = [];

  if (history) {

    history.forEach(item => {
      const usluga = item.attributes.usluga.data.attributes
      const history_elem = (
        <div className={styles.item}>
          <p>{item.attributes.date}</p>
          <p className={styles.middle}>{usluga.name}</p>
          <p>{usluga.price}</p>
        </div>
      )
      if (new Date(item.attributes.date) > date) {
        future.push(history_elem);
      } else {
        past.push(history_elem);
      }
    })
  }
 

  return (
    <>
    {
      future.length > 0 &&
      <div className={styles.card}>
        <h3>Предстоящие посещения</h3>
        <div className={styles.card_active}>
          <h5>Дата</h5>
          <h5>Услуга</h5>
          <h5>Цена</h5>
        </div>
        {future}
      </div>
    }
    
    {
      past.length > 0 &&
      <div className={styles.card}>
        <h3>История</h3>
        <div className={styles.card_history}>
          <h5>Дата</h5>
          <h5>Услуга</h5>
          <h5>Цена</h5>
        </div>
        {past}
      </div>
    }

    {
      (!(future.length > 0) && !(past.length > 0)) &&
      <h2>История пуста, будем видеть вас впервые)</h2>
    }
    
    </>
  )
}