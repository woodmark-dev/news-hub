import Link from "next/link";
import "./top-sport-update-card.css";
import NewsCard from "@/app/components/news-card/news-card";

export default function TopSportUpdateCard({
	link,
	category,
	heading,
	summary,
	imgSrc,
	imgAlt,
}: {
	link: string;
	category: string | null;
	heading: string | null;
	summary: string;
	imgSrc: string;
	imgAlt: string;
}) {
	return (
		<Link href={link} className="TopSportUpdateCard">
			<NewsCard type="content-left" imgAlt={imgAlt} imgSrc={imgSrc}>
				<div className="Content">
					<p className="Category">{category}</p>
					<h4>{heading}</h4>
					<p>{summary}</p>
				</div>
			</NewsCard>
		</Link>
	);
}
