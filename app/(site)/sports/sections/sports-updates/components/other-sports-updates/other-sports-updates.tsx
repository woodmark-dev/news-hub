import Link from "next/link";
import "./other-sports-updates.css";
import NewsCard from "@/app/components/news-card/news-card";

export default function OtherSportsUpdateCard({
	link,
	summary,
	imgSrc,
	imgAlt,
}: {
	link: string;
	summary: string;
	imgSrc: string;
	imgAlt: string;
}) {
	return (
		<Link href={link} className="OtherSportsUpdateCard">
			<NewsCard type="content-bottom" imgAlt={imgAlt} imgSrc={imgSrc}>
				<div>
					<p>{summary}</p>
				</div>
			</NewsCard>
		</Link>
	);
}
