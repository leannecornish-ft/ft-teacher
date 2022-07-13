export default function Button({ text, disabled, onClick }) {
	return (
		<button onClick={onClick} disabled={disabled} class="o-buttons o-buttons--primary o-buttons-icon o-buttons-icon--arrow-right o-buttons--big">{text}</button>
	)
}