"use client"
import Container from "@/components/std/Container";
import styles from "./login.module.css"
import { hasCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";
import axios, { AxiosError } from "axios";

export default function Register() {
	const router = useRouter();

	if (hasCookie('jwt')) {
		router.push('/lk')
	}

	const [login_data, set_login_data] = useState({
		email: '',
		password: '',
	})

	const [errors, set_errors] = useState<Array<string>>([])

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e: any) => {
		//@ts-ignore
		const {name, value} = e.target;

		set_login_data(prev => {
			return {
				...prev,
				[name]: value
			}
		})
	}

	const send = (e: any) => {
		e.preventDefault();
		const mail_re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		let errors: Array<string> = []

		if (login_data['email'] == '' || !mail_re.test(login_data['email'])) {
			errors.push('email')
		}

		if (login_data['password'].length < 6) {
			errors.push('password')
		}

		if (errors.length > 0) {
			set_errors(prev => errors)
		} else {
			set_errors(prev => [])
			axios.post('/api/login', JSON.stringify(login_data)).then(res => {
				setCookie('jwt', res.data)
				router.push('/lk')
			}).catch((err: AxiosError) => {
				if (err.response) {
					const status = err.response.status;

					if (status === 404) {
						set_errors(['email']);
					}

					if (status === 301) {
						set_errors(['password']);
					}
				}
			})
		}
	}

	return (
		<div className={styles.wrappen}>
			<Container>
				<div className={styles.name_form}>
					<div className={styles.name}>
						<h6 className={styles.title}>С возвращением!</h6>
						<h5 className={styles.subtitle}>Войдите в учетную запись, чтобы получить доступ к своему аккаунту</h5>
					</div>
					<div className={styles.card}>
						<form onSubmit={send}>
							<h3 className={styles.name_log}>Вход</h3>
							<div>
								<h5 className={styles.log_name}>Email</h5>
								<input className={styles.log_input + ' ' + (errors.includes('email') && styles.error)} placeholder="Введите email" type="email" name="email" onChange={handleChange}/>
							</div>
							<div>
								<h5 className={styles.log_name}>Пароль</h5>
								<input className={styles.log_input + ' ' + (errors.includes('password') && styles.error)} placeholder="Введите пароль" type="password" name="password" onChange={handleChange}/>
							</div>
							<button className={styles.log_btn}>Войти</button>
						</form>

						<div className={styles.support}>
							<a href="/register">
								<h5 className={styles.reg}>Нет учетной записи?</h5>
							</a>
							<a href="/register">
								<h5 className={styles.reg}>Зарегестрироваться</h5>
							</a>
						</div>	
					</div>
				</div>
			</Container>
		</div>
	)
}