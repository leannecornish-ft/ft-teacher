export default function Button({ text, onClick }) {
	return (
		<button onClick={onClick} class="o-buttons o-buttons--primary o-buttons-icon o-buttons-icon--arrow-right o-buttons--big">{text}</button>
	)
}