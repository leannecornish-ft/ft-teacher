import Button from "../components/Button";
import story from "../story.json"


export default function Content({ nextPage, pageId }) {
	return (
		<>
			<h1>Fino Lingo</h1>
			<h2>{story[pageId].title}</h2>
			<p>{story[pageId].description}</p>
			<Button onClick={() => nextPage()} text={"Next"}/>
		</>
	)
}