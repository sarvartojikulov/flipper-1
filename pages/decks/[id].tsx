import { useRouter } from "next/router";

const decks = () => {
	const router = useRouter();
	const {id} = router.query

	return (
		<div>
{id}
		</div>
	)
}


export default decks;