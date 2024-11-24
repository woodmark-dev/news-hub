import Link from "next/link";
import "./featured-news-card.css";
import NewsCard from "@/app/components/news-card/news-card";

export default function FeaturedNewsCard({
	link,
	imgSrc,
	heading,
	summary,
	date,
	imgAlt,
}: {
	link: string;
	imgSrc: string;
	heading: string;
	summary: string;
	date: string;
	imgAlt: string;
}) {
	return (
		<Link href={link} className="FeaturedNewsCard">
			<NewsCard type="content-right" imgSrc={imgSrc} imgAlt={imgAlt}>
				<div className="Content">
					<header>
						<h4>{heading}</h4>
					</header>
					<div className="MainContent">
						<p>{summary}</p>
						<p>{date}</p>
					</div>
				</div>
			</NewsCard>
		</Link>
	);
}
