"use client"
import Container from "@/components/std/Container";
import styles from "./register.module.css"
import { ChangeEventHandler, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import jwt from 'jsonwebtoken';
import { redirect, useRouter } from "next/navigation";
import { hasCookie, setCookie } from "cookies-next";

export default function Register() {
	const router = useRouter();

	if (hasCookie('jwt')) {
		router.push('/lk')
	}

	const [form_data, set_form_data] = useState({
		name: '',
		email: '',
		phone: '',
		password: '',
	})

	const [errors, set_errors] = useState<Array<string>>([])

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e: any) => {
		//@ts-ignore
		const {name, value} = e.target;

		set_form_data(prev => {
			return {
				...prev,
				[name]: value
			}
		})
	}

	const send = (e: any) => {
		e.preventDefault();
		const mail_re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		const phone_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;

		let errors: Array<string> = []

		if (form_data['name'] == '') {
			errors.push('name')
		}

		if (form_data['phone'] == '' || !phone_re.test(form_data['phone'])) {
			errors.push('phone')
		}

		if (form_data['email'] == '' || !mail_re.test(form_data['email'])) {
			errors.push('email')
		}

		if (form_data['password'].length < 6) {
			errors.push('password')
		}

		if (errors.length > 0) {
			set_errors(prev => errors)
		} else {
			set_errors(prev => [])
			axios.post('/api/register', JSON.stringify(form_data))
			.then(res => {
				setCookie('jwt', res.data)
				router.push('/lk')
			}).catch((err: AxiosError) => {
				if (err.response) {
					const status = err.response.status;

					if (status === 400) {
						set_errors(['email']);
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
						<h6 className={styles.title}>Добро пожаловать в клуб!</h6>
						<h5 className={styles.subtitle}>Создайте учетную запись, чтобы получить доступ к своему аккаунту</h5>
					</div>
					<div className={styles.card}>
						<form>
							<h3 className={styles.name_reg}>Регистрация</h3>
							<div>
								<h5 className={styles.reg_name}>Имя</h5>
								<input className={styles.reg_input + ' ' + (errors.includes('name') && styles.error)} placeholder="Введите имя" pattern="[A-Za-z]" type="text" name="name" onChange={handleChange} value={form_data['name']}/>
							</div>
							<div>
								<h5 className={styles.reg_name}>Номер телефона</h5>
								<input className={styles.reg_input + ' ' + (errors.includes('phone') && styles.error)} placeholder="890000000" type="tel" name="phone" onChange={handleChange} value={form_data['phone']}/>
							</div>
							<div>
								<h5 className={styles.reg_name}>E-mail</h5>
								<input className={styles.reg_input + ' ' + (errors.includes('email') && styles.error)} placeholder="E-mail" type="email" name="email" onChange={handleChange} value={form_data['email']}/>
							</div>
							<div>
								<h5 className={styles.reg_name}>Пароль</h5>
								<input className={styles.reg_input + ' ' + (errors.includes('password') && styles.error)} placeholder="Введите пароль" type="password" name="password" onChange={handleChange} value={form_data['password']}/>
							</div>

							<button className={styles.reg_btn} onClick={send} type="button">Создать</button>
						</form>

						<div className={styles.support}>
							<a href="http://localhost:3000/login">
								<h5 className={styles.reg}>Есть учетная записи?</h5>
							</a>
							<a href="http://localhost:3000/login">
								<h5 className={styles.reg}>Войти</h5>
							</a>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}