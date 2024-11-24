import Link from "next/link";
import "./trending-news-card.css";
import NewsCard from "@/app/components/news-card/news-card";

export default function TrendingNewsCard({
	link,
	imgSrc,
	imgAlt,
	heading,
	summary,
	date,
}: {
	link: string;
	date: string | null;
	imgSrc: string;
	imgAlt: string;
	heading: string;
	summary: string;
}) {
	return (
		<Link href={link} className="TrendingNewsCard">
			<NewsCard type="content-overlay" imgSrc={imgSrc} imgAlt={imgAlt}>
				<div className="Content">
					<header>
						<h4>{heading}</h4>
					</header>
					<div className="MainContent">
						<p className="Summary">{summary}</p>
						<p className="Date">{date}</p>
					</div>
				</div>
			</NewsCard>
		</Link>
	);
}
