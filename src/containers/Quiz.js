import Button from "../components/Button";
import Options from "../components/Options";
import story from "../story.json"
const questions = [];

export default function Quiz({pageId}) {
	return (
		<>
			<h1>FT Teacher</h1>
			<p>{story[pageId].question}</p>
			<div><Options choices={story[pageId].options}/></div>
			{/* <div>{story[pageId].options.map(question => {
				return <Option />
			})}</div> */}
			{/* <div>Multiple options</div>
			<Options /> */}
			<Button text={"Submit"} />
		</>
	)
}