import Container from '../std/Container'
import styles from './header.module.css'
import Image from 'next/image'
import logo from './logo.png'
import Button from '../std/Button'

export default function Header() {
	return (
	<header className={styles.header_wrapper}>
		<Container className={styles.header}>
			<a href="/" className={styles.logo}>
				<Image src={logo} alt="logo" width={46} height={46} />
				<h4 className={styles.name}>Лысый Бебрик</h4>
			</a>
			<Button style='secondary'>Запишись</Button>
		</Container>
	</header>
	)
}