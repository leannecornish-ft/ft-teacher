import Button from "../components/Button";

export default function Content({ nextPage }) {
	return (
		<>
			<h1>FT Teacher</h1>
			<div>Possibly a carousel</div>
			<p>Some description</p>
			<Button onClick={nextPage} text={"Start"}/>
		</>
	)
}