"use client"
import { useCookies } from "next-client-cookies";
import styles from "./lk.module.css"
import Container from "@/components/std/Container";
import { useRouter } from "next/navigation";

export default function Home() {

	const cookies = useCookies();
	const router = useRouter();

	if (!cookies.get('jwt')) {
		router.push('/login');
	}

	console.log(cookies.get('jwt'));
	return (
		<div className={styles.profile}>
			<Container>
				<div className={styles.info}>
					<div className={styles.card_info}>
						<h3>Мой профиль</h3>
						<div className={styles.client_info}>
							<h4 className={styles.client_title}>Мое имя</h4>
							<h5>Заполнится</h5>
							<h4 className={styles.client_title}>Номер телефона</h4>
							<h5>Заполнится</h5>
							<h4 className={styles.client_title}>Почта</h4>
							<h5>Заполнится</h5>
						</div>
					</div>

					<div className={styles.fun}>
						<div className={styles.card_reception}>
							<h3>Записаться на прием</h3>
							<div className={styles.reception}>
								<h5>Услуга</h5>
								<h5>Мастер</h5>
								<h5>Время</h5>
							</div>
							<form action="">
								<div className={styles.reception_input}>
									<input type="text" name="" id="" />
									
									<input type="text" />
									<input type="text" />
								</div>
								<button className={styles.reception_btn}>Записаться</button>
							</form>
							
						</div>

						<div className={styles.card}>
							<h3>Записаться на прием</h3>
							<div className={styles.card_active}>
								<h5>Дата</h5>
								<h5>Услуга</h5>
								<h5>Цена</h5>
							</div>
						</div>

						<div className={styles.card}>
							<h3>История</h3>
							<div className={styles.card_history}>
								<h5>Дата</h5>
								<h5>Услуга</h5>
								<h5>Цена</h5>
							</div>
						</div>
					</div>
				</div>
				
			</Container>
		</div>


	);
}
