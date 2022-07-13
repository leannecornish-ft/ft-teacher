import { useEffect, useState } from "react";
import Button from "../components/Button";
import Options from "../components/Options";
import story from "../story.json"
const questions = [];

export default function Quiz({ pageId, responses, setResponses, nextPage }) {
	const [selected, setSelected] = useState();

	useEffect(() => {
		setSelected()
	}, [pageId])

	return (
		<>
			<h1>Fino Lingo</h1>
			<p>{story[pageId].question}</p>
			<div><Options choices={story[pageId].options} questionId={pageId - 1} selected={selected} setSelected={setSelected} responses={responses} setResponses={setResponses} /></div>
			<Button text={"Next"} disabled={responses[pageId - 1] === undefined} onClick={nextPage} />
		</>
	)
}