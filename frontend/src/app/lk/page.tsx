import styles from "./lk.module.css"
import Container from "@/components/std/Container";
import { cookies } from 'next/headers'
import Info from "./Info";
import { redirect } from "next/navigation";
import Reception from "./Reception";
import axios from "axios";
import History from "./History";
import user from "./user";

type user_data = {
	id: number,
	attributes: user
}

export default async function Home() {

	const cookieStore = cookies()
  const jwt = cookieStore.get('jwt');

	if (!jwt) {
		redirect('/login')
	}

	const user: user_data = (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/klients?populate=deep&filters[email][$eq]=${JSON.parse(jwt.value).email}`, {
		headers: {
			"Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
			"Content-Type": "application/json"
		}
	})).data.data[0]

	const uslugas = (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/uslugas?populate=deep`, {
		headers: {
			"Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
			"Content-Type": "application/json"
		}
	})).data.data

	return (
		<div className={styles.profile}>
			<Container>
				<div className={styles.info}>
					
					<Info user={user.attributes}/>

					<div className={styles.fun}>
						
						<Reception user_id={user.id} uslugas={uslugas}/>

						<History user={user.attributes}/>
					</div>
				</div>
				
			</Container>
		</div>


	);
}
