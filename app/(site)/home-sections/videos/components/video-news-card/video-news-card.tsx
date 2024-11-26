import Link from "next/link";
import "./video-news-card.css";
import NewsCard from "@/app/components/news-card/news-card";

export default function VideoNewsCard({
	link,
	imgAlt,
	imgSrc,
	category,
	summary,
	author,
}: {
	link: string;
	imgAlt: string;
	imgSrc: string;
	category: string;
	summary: string;
	author: string;
}) {
	return (
		<Link href={link} className="VideoNewsCard">
			<NewsCard type="video-card" imgAlt={imgAlt} imgSrc={imgSrc}>
				<div className="Content">
					<h4>{category}</h4>
					<p>{summary}</p>
					<p>{author}</p>
				</div>
			</NewsCard>
		</Link>
	);
}
