import Container from "@/components/std/Container"
import MasterCard from "./MasterCard"
import styles from './masters.module.css'

export default function Masters() {

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

	return (
		<Container>
			<h2>masters</h2>
			<div className={styles.card_wrapper}>
				{master_arr.map((master, index) => {
					return <MasterCard key={index} {...master} />
				})}
			</div>
		</Container>
	)
}
