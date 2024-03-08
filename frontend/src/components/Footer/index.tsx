import Container from '../std/Container'
import styles from "./footer.module.css"
import logo from './logo.png'
import Image from 'next/image'

export default function Footer() {
	return (
		<footer className={styles.footer_wrapper}>
			<Container className={styles.footer}>
				<a href="http://localhost:3000/main" className={styles.logo}>
					<Image src={logo} alt="logo" width={100} height={100} />
					<h5 className={styles.name}>Лысый Bebrik</h5>
				</a>
				<div className={styles.nav}>
					<a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.329366%2C60.003674&mode=poi&poi%5Bpoint%5D=30.329363%2C60.003501&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D57794093441&z=17.35">
						<h5 className={styles.addres}>Просп. Энгельса 23</h5>
					</a>
					<h5 className={styles.phone}>+7900-000-00-00</h5>
				</div>
			</Container>
		</footer>
	)
}