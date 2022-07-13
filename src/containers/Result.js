import Button from "../components/Button";

export default function Result({score}) {

	function scoreband(lower, upper) {
		if (score > lower && score < upper) {
			return "correct-scoreband"
		} else {
			return "incorrect-scoreband"
		}
	}
	return (
		<>
			<h1>You scored {score} out of 5!!</h1>
			<p className={scoreband(4, 6)}>5 - Top of the class</p>
			<p className={scoreband(3, 5)}>4 - Solid effort</p>
			<p className={scoreband(2, 4)}>3 - Could do better</p>
			<p className={scoreband(-1, 3)}>less than 3 - maybe worth revisting</p>
			<Button text={"Return to start"} />
		</>
	)
}