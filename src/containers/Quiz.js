import { useState } from "react";
import Button from "../components/Button";
import Options from "../components/Options";
import story from "../story.json"
const questions = [];

export default function Quiz({ pageId, responses, setResponses, nextPage }) {
	// const [] = useState()
	console.log(responses)
	return (
		<>
			<h1>FT Teacher</h1>
			<p>{story[pageId].question}</p>
			<div><Options choices={story[pageId].options} questionId={pageId - 1} responses={responses} setResponses={setResponses} /></div>
			{/* <div>{story[pageId].options.map(question => {
				return <Option />
			})}</div> */}
			{/* <div>Multiple options</div>
			<Options /> */}
			<Button text={"Submit"} disabled={responses[pageId - 1] === undefined} onClick={nextPage} />
		</>
	)
}