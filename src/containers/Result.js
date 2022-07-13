import Button from "../components/Button";

export default function Result({score}) {
	function scoreband(lower, upper) {
		if (score > lower && score < upper) {
			return "correct-scoreband"
		} else {
			return "false-scoreband"
		}
	}
	return (
		<>
			<h1>You scored {score} out of 25!!</h1>
			<p className={scoreband(21, 25)}>21-25 - Top of the class</p>
			<p className={scoreband(16, 21)}>16-20 - Solid effort</p>
			<p className={scoreband(10, 16)}>10-15 - Could do better</p>
			<p className={scoreband(0, 10)}>less than 10 - maybe worth revisting</p>
			<Button text={"Return to start"} />
		</>
	)
}