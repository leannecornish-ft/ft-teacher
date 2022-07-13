// import { useState } from "react";
import "./Options.scss"

export default function Options({choices = [], questionId, responses, setResponses, selected, setSelected}) {
	const correctIndex = choices.findIndex(choice => choice.correct);

	function onChange(event) {
		const currentResponses = [...responses];

		currentResponses[questionId] = parseInt(event.target.value) === correctIndex;
	
		setSelected(parseInt(event.target.value))
		setResponses([...currentResponses])
	}

	const extraClass = responses[questionId] !== undefined ? responses[questionId] === true ? 'option-correct' : 'option-incorrect' : ''

	return (
		<div class="o-forms-field o-forms-field--optional" role="group" aria-labelledby="radio-round-group-title" aria-describedby="radio-round-group-info">
      <span class="o-forms-input o-forms-input--radio-round">
				{choices.map((choice, index) => {
					return (
						<label key={index} className={selected === index ? extraClass : ''}>
							<input type="radio" name="default" value={index} onChange={onChange} disabled={selected !== undefined} checked={selected === index} />
							<span class="o-forms-input__label">{choice.name}</span>
						</label>
					)
				})}
      </span>
		</div>	
	)
}