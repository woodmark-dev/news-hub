import "./button.css";
export default function Button({ text, type }: { text: string; type: string }) {
	return (
		<button className="Button" data-type={type}>
			{text}
		</button>
	);
}
