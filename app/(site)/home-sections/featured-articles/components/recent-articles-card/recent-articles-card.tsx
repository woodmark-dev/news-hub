import Link from "next/link";
import "./recent-articles-card.css";
import NewsCard from "@/app/components/news-card/news-card";
export default function RecentArticlesCard({
	link,
	imgSrc,
	imgAlt,
	summary,
	date,
}: {
	imgSrc: string;
	imgAlt: string;
	summary: string;
	link: string;
	date: string;
}) {
	return (
		<Link href={link} className="RecentArticlesCard">
			<NewsCard imgSrc={imgSrc} imgAlt={imgAlt} type="content-right">
				<div className="Content">
					<p>{summary}</p>
					<p>{date}</p>
				</div>
			</NewsCard>
		</Link>
	);
}
