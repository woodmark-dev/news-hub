import Image from "next/image";
import "./trending-news-card.css";
import Link from "next/link";

type tredingNews = {
	imgSrc: string;
	imgAlt: string;
	tag: string;
	description: string;
};

export default function TrendingNewsCard({
	imgSrc,
	imgAlt,
	tag,
	description,
}: tredingNews) {
	return (
		<Link href="#" className="TrendingNewsCard">
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
				</div>
			</figcaption>
		</Link>
	);
}
