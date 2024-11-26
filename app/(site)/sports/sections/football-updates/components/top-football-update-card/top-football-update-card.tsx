import Link from "next/link";
import "./top-football-update-card.css";
import NewsCard from "@/app/components/news-card/news-card";

export default function TopFootballUpdateCard({
	link,
	imgAlt,
	imgSrc,
	newsSource,
	summary,
}: {
	link: string;
	imgSrc: string;
	imgAlt: string;
	newsSource: string | null;
	summary: string;
}) {
	return (
		<Link href={link} className="TopFootballUpdateCard">
			<NewsCard type="content-overlay" imgAlt={imgAlt} imgSrc={imgSrc}>
				<div className="Content">
					<p>{summary}</p>
					<p>{newsSource}</p>
				</div>
			</NewsCard>
		</Link>
	);
}
