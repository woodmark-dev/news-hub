import Image from "next/image";
import "./news-card.css";

type tredingNews = {
	imgSrc: string;
	imgAlt: string;
	tag: string;
	description: string;
	type: string;
};

export default function NewsCard({
	imgSrc,
	imgAlt,
	tag,
	description,
	type,
}: tredingNews) {
	return (
		<figure className="TrendingNewsCard" role="link" data-type={type}>
			<div className="ImageWrapper">
				<Image width={350} height={239} src={imgSrc} alt={imgAlt} />
			</div>
			<figcaption>
				<div className="Placeholder"></div>
				<div className="Content">
					<p className="Tag">
						<span>{tag}</span>
					</p>
					<article className="Description">{description}</article>
					<p className="Time">1 hour ago</p>
				</div>
			</figcaption>
		</figure>
	);
}
