import Button from "../components/Button";
import story from "../story.json"


export default function Content({ nextPage, pageId }) {
	return (
		<>
			<h1>{story[pageId].title}</h1>
			<p>{story[pageId].description}</p>
			<Button onClick={() => nextPage()} text={"Next"}/>
		</>
	)
}