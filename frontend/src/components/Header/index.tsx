import Container from '../std/Container'
import styles from './header.module.css'
import Image from 'next/image'
import logo from './logo.png'
import Button from '../std/Button'

export default function Header() {
	return (
	<header className={styles.header_wrapper}>
		<Container className={styles.header}>
			<a href="http://localhost:3000/main" className={styles.logo}>
				<Image src={logo} alt="logo" width={46} height={46} />
				<h4 className={styles.name}>Лысый Bebrik</h4>
			</a>
				<div className={styles.nav}>
					<a href="http://localhost:3000/masters">
						<h5 className={styles.masters}>Наши мастера</h5>
					</a>
					<a href="">
						<h5 className={styles.service}>Услуги</h5>
					</a>
					<a href="http://localhost:3000/login">
						<h5 className={styles.personal}>Личный кабинет</h5>
					</a>
				</div>
				
		</Container>
	</header>
	)
}