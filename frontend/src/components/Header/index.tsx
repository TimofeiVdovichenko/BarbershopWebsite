"use client"
import Container from '../std/Container'
import styles from './header.module.css'
import Image from 'next/image'
import logo from './logo.png'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { deleteCookie, hasCookie } from 'cookies-next'

export default function Header() {
	const pathname = usePathname();
	const router = useRouter();

	const exit = () => {
		deleteCookie('jwt');
		router.push('/');
	}

	return (
	<header className={styles.header_wrapper}>
		<Container className={styles.header}>
			<a href="/main" className={styles.logo}>
				<Image src={logo} alt="logo" width={46} height={46} />
				<h4 className={styles.name}>Лысый Bebrik</h4>
			</a>
				<div className={styles.nav}>
					<a href="/masters">
						<h5 className={styles.masters}>Наши мастера</h5>
					</a>
					<a href="">
						<h5 className={styles.service}>Услуги</h5>
					</a>
					{
						pathname == '/lk' ?
						<a onClick={exit}>
							<h5 className={styles.personal}>Выход</h5>
						</a>
						:
						<a href={hasCookie('jwt') ? "/lk" : "/login"}>
							<h5 className={styles.personal}>Личный кабинет</h5>
						</a>
					}
					
				</div>
				
		</Container>
	</header>
	)
}