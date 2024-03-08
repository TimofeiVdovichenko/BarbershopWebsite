import axios from "axios";

export default async function get_master_data() {
	const config = {
		headers: { "Authorization": "Bearer bd266101b6935f480773dc9821e17f1e28dda612632850296f861b0b8d5efbd086dd33b9e28960d249cc23f8ecc83d7e2dcc4bdd706e8e3fbb83f4e48f6306875bccbc2a07ea7af1f884950ebd78f050f59f036c22dbd2c0ce4205121741aac582cc8e51863aa2ba62429f4f59a88c8a8b6e281d08df649e21da3dbf580b0313"}
	}
	const data = await axios.get("http://127.0.0.1:1337/api/masters?populate=deep", config);

	const return_data = data.data.data.map((master: any) => {
		return {id: master.id, ...master.attributes}
	})

	return return_data
}