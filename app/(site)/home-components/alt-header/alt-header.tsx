import "./alt-header.css";

export default function AltHeader({ text }: { text: string }) {
	return (
		<header className="AltHeader">
			<p></p>
			<h2>{text}</h2>
			<p></p>
		</header>
	);
}
