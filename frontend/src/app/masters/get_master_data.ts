import axios from "axios";

export default async function get_master_data() {
	const config = {
		headers: { "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY}
	}
	const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/masters?populate=deep`, config);

	const return_data = data.data.data.map((master: any) => {
		return {id: master.id, ...master.attributes}
	})

	return return_data
}