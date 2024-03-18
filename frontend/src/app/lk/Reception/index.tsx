"use client"

import { ChangeEventHandler, useEffect, useState } from 'react'
import user from '../user'
import styles from './request.module.css'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type props = {
  user_id: number,
  uslugas: usluga[]
}

type usluga = {
  id: number,
  attributes: {
    name: string,
    price: 2000,
    masters: {
      data: master[]
    }
  }
}

type master = {
  id: number,
  attributes: {
    name: string,
    specialty: string,
    raspisanies: {
      data: raspisanie[]
    }
  }
}

type raspisanie = {
  id: number,
  attributes: {
    date: string,
    time: string,
  }
}

type request = {
  usluga: string | undefined,
  master: string | undefined,
  date: string | undefined,
  time: string,
  klient: number
}

export default function Reception(props: props) {

  const router = useRouter()

  const [request, set_request] = useState<request>({
    usluga: undefined,
    master: undefined,
    date: undefined,
    time: '',
    klient: props.user_id
  })

  const [masters, set_masters] = useState<Array<master>>([])

  const [times, set_times] = useState<Array<string>>([])

  const usluga_options = props.uslugas.map(usluga => {
    return <option key={'usluga' + usluga.id} value={usluga.id}>{usluga.attributes.name} - {usluga.attributes.price}р</option>
  })

  

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e: any) => {
		//@ts-ignore
		const {name, value} = e.target;

		set_request(prev => {

      const setted = {
        ...prev,
        master: name == 'usluga' ? undefined : prev.master,
        date: (name == 'usluga' || name == 'master') ? undefined : prev.date,
        time: '',
        [name]: value,
      }

			return {
				...prev,
				[name]: value
			}
		})

    if (name == 'usluga' && value != 0) {
      set_masters(() => {
        let masters: master[] = []
        props.uslugas.forEach(usluga => {
          if (usluga.id == value) {
            masters = usluga.attributes.masters.data
          }
        })

        if (masters) {
          return masters
        }

        return []
      })
    }

    if (name == 'date') {
      set_times(() => {
        let available = ["t9:00", "t10:00", "t11:00", "t12:00", "t13:00", "t14:00", "t15:00", "t16:00", "t17:00", "t18:00", "t19:00", "t20:00", "t21:00"];

        const master = masters.filter(master => master.id == Number(request.master));
        const raspisanies = master[0].attributes.raspisanies.data.filter(raspi => raspi.attributes.date == value);

        raspisanies.forEach(raspi => {
          available = available.filter(time => !time.includes(raspi.attributes.time))
        })

        return available
      })
    }
	}

  const send = () => {
    const send_data = {
      data: {
        usluga: Number(request.usluga),
        klient: Number(request.klient),
        time: request.time,
        master: Number(request.master),
        date: request.date
      }
    }
    
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/raspisanies`, JSON.stringify(send_data), {
      headers: {
        "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
        "Content-Type": "application/json"
      }
    }).then(res => router.refresh())
  }

  return (
    <div className={styles.card_reception}>
      <h3>Записаться на прием</h3>
      <div className={styles.reception}>
        <h5>Услуга</h5>
        <h5>Мастер</h5>
        <h5>Дата</h5>
        <h5>Время</h5>
      </div>
      <form onSubmit={send}>
        <div className={styles.reception_input}>
          <select name="usluga" value={request.usluga} onChange={handleChange}>
            <option value="0">Выберите услугу</option>
            {usluga_options}
          </select>

          <select name="master" disabled={(request.usluga == undefined || request.usluga == "0")} value={request.master} onChange={handleChange}>
            <option value="0">Выберите мастера</option>
            {masters.map(master => <option key={'master' + master.id} value={master.id}>{master.attributes.name} - {master.attributes.specialty}</option>)}
          </select>

          <input type="date" name='date' min={new Date().toJSON().split('T')[0]} disabled={(request.master == undefined || request.master == "0")} value={request.date} onChange={handleChange}/>

          <select name="time" disabled={request.date == undefined} value={request.time} onChange={handleChange}>
            <option value="0">Выберите время</option>
            {times.map(time => <option key={'time' + time} value={time}>{time.slice(1)}</option>)}
          </select>
        </div>
        <button type="submit" className={styles.reception_btn} disabled={!request.date || !request.master || !request.time || !request.usluga}>Записаться</button>
      </form>
      
    </div>
  )
}