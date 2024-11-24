import Link from "next/link";
import "./other-football-update-card.css";
import NewsCard from "@/app/components/news-card/news-card";

export default function OtherFootBallUpdateCard({
	link,
	imgSrc,
	imgAlt,
	summary,
}: {
	link: string;
	imgSrc: string;
	imgAlt: string;
	summary: string;
}) {
	return (
		<Link href={link} className="OtherFootBallUpdateCard">
			<NewsCard type="content-bottom" imgAlt={imgAlt} imgSrc={imgSrc}>
				<div>{summary}</div>
			</NewsCard>
		</Link>
	);
}
