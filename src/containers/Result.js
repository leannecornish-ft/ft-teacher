import Button from "../components/Button";

export default function Result({score, goToPage }) {
	function scoreband(lower, upper) {
		if (score > lower && score < upper && (lower >= 6)) {
			return "correct-scoreband-high"
		} else if (score > lower && score < upper && (lower === 5)){
			return "correct-scoreband-mid"
		} else if  (score > lower && score < upper) {
			return "correct-scoreband-low"
		} else {
			return "incorrect-scoreband"
		}
	}
	return (
		<>
			<h1>You scored {score} out of 8!!</h1>
			<p className={scoreband(7, 9)}>8 - Top of the class</p>
			<p className={scoreband(6, 8)}>7 - Solid effort</p>
			<p className={scoreband(5, 7)}>6 - Could do better</p>
			<p className={scoreband(-1, 6)}>5 or less - maybe worth revisting</p>
			<Button text={"Return to start"} onClick={goToPage(0)} />
		</>
	)
}