import Image from "next/image";
import "./team-photo.css";
export default function TeamPhoto({
	name,
	imgSrc,
	role,
}: {
	name: string;
	imgSrc: string;
	role: string;
}) {
	return (
		<figure className="TeamPhoto">
			<div className="ImageWrapper">
				<Image alt={name} src={imgSrc} width={1280} height={1280} />
			</div>
			<figcaption>
				<div>
					<p>{name}</p>
					<p>{role}</p>
				</div>
			</figcaption>
		</figure>
	);
}
