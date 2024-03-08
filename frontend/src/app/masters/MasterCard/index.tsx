import Card from "@/components/std/Card"
import styles from "./card.module.css"

type props = {
	name: string,
	photo: any,
	description: string,
	position: string, 
	specialty: string
}

export default function MasterCard(props: props) {
	const image_path = `http://127.0.0.1:1337${props.photo.data.attributes.url}`;

	console.log(image_path)

	return (
			<div className={styles.cards}>
				<Card style={"gray"}>
					<img className={styles.img} src={image_path} alt={props.name} width={345} height={410} />
					<h4 className={styles.title}>{props.name}</h4>
					<h5 className={styles.specialty}>/ / {props.specialty}</h5>
					<p className={styles.description}>{props.description}</p>
					<p className={styles.position}>{props.position}</p>
				</Card>
		</div>
		
	)
}