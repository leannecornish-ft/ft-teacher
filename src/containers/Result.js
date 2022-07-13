import Button from "../components/Button";

export default function Result({score, goToPage }) {

	function scoreband(lower, upper) {
		if (score > lower && score < upper && (lower >= 3)) {
			return "correct-scoreband-high"
		} else if (score > lower && score < upper && (lower === 2)){
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
			<p className={scoreband(4, 6)}>5 - Top of the class</p>
			<p className={scoreband(3, 5)}>4 - Solid effort</p>
			<p className={scoreband(2, 4)}>3 - Could do better</p>
			<p className={scoreband(-1, 5)}>less than 5 - maybe worth revisting</p>
			<Button text={"Return to start"} onClick={goToPage(0)} />
		</>
	)
}