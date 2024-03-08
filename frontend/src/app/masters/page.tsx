import Container from "@/components/std/Container"
import MasterCard from "./MasterCard"
import styles from './masters.module.css'
import get_master_data from "./get_master_data";

export default async function Masters() {

	const master_arr = [{
		name: 'asdasd',
		description: 'asdasd',
		position: 'asdasda',
		img: 'asdasd'
	}, {
		name: 'pidoras',
		description: 'asdasd',
		position: 'asdasda',
		img: 'asdasd'
	}, {
		name: 'pidoras2',
		description: 'asdasd',
		position: 'asdasda',
		img: 'asdasd'
	}]

	const master_data = await get_master_data();
	console.log(master_data)

	return (
		<div className={styles.cards}>
			<Container>
				<h3 className={styles.subtitle}>Познакомьтесь с нашей командой профессионалов</h3>
				<h2 className={styles.title}>Наши парикмахеры и стилисты</h2>
				<div className={styles.card_wrapper}>
					{master_data.map((master: any) => {
						return <MasterCard key={master.id} {...master} />
					})}
				</div>
			</Container>
		</div>
		
	)
}
