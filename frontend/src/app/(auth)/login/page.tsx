import Container from "@/components/std/Container";
import styles from "./login.module.css"

export default function Register() {
	return (
		<div className={styles.wrappen}>
			<Container>
				<div className={styles.name_form}>
					<div className={styles.name}>
						<h6 className={styles.title}>С возвращением!</h6>
						<h5 className={styles.subtitle}>Войдите в учетную запись, чтобы получить доступ к своему аккаунту</h5>
					</div>
					<div className={styles.card}>
						<form action="">
							<h3 className={styles.name_log}>Вход</h3>
							<div>
								<h5 className={styles.log_name}>Логин</h5>
								<input className={styles.log_input} placeholder="Введите имя" pattern="[A-Za-z]" type="text" />
							</div>
							<div>
								<h5 className={styles.log_name}>Пароль</h5>
								<input className={styles.log_input} placeholder="Введите пароль" type="password" />
							</div>
							<button className={styles.log_btn}>Войти</button>
						</form>

						<div className={styles.support}>
							<a href="http://localhost:3000/register">
								<h5 className={styles.reg}>Нет учетной записи?</h5>
							</a>
							<a href="http://localhost:3000/register">
								<h5 className={styles.reg}>Зарегестрироваться</h5>
							</a>
						</div>	
					</div>
				</div>
			</Container>
		</div>
	)
}