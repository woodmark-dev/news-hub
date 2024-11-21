import "./stay-connected-card.css";

export default function StayConnectedCard({
	children,
	followers,
	buttonText,
}: {
	children: React.ReactNode;
	followers: string;
	buttonText: string;
}) {
	return (
		<div className="StayConnectedCard">
			<div className="Icon">{children}</div>
			<div className="Followers">
				<p>{followers}</p>
			</div>
			<div className="ButtonWrapper">
				<p>{buttonText}</p>
			</div>
		</div>
	);
}
