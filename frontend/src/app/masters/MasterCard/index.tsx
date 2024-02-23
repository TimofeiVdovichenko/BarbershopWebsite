import Card from "@/components/std/Card"

type props = {
	name: string,
	img: string,
	description: string,
	position: string
}

export default function MasterCard(props: props) {
	return (
		<Card style={"gray"}>
			<img src={props.img} alt={props.name} />
         <h3>{props.name}</h3>
         <p>{props.description}</p>
         <p>{props.position}</p>
		</Card>
	)
}