import RecentArticlesCard from "../recent-articles-card/recent-articles-card";
import "./recent-articles.css";

const recentArticles: {
	imgSrc: string;
	imgAlt: string;
	summary: string;
	id: number;
	link: string;
	date: string;
}[] = [
	{
		id: 1,
		imgSrc: "/featured-images/Rectangle24.png",
		summary:
			"Major African cities are upgrading infrastructure to support rapid urbanization and future growth.",
		link: "#",
		date: "1 hr ago",
		imgAlt: "recent articles image",
	},
	{
		id: 2,
		imgSrc: "/featured-images/Rectangle25.png",
		summary:
			"Women’s football is experiencing significant growth and recognition across African countries.",
		link: "#",
		date: "1 hr ago",
		imgAlt: "recent articles image",
	},
	{
		id: 3,
		imgSrc: "/featured-images/Rectangle26.png",
		summary:
			"Digital education platforms are transforming learning and improving access for African families.",
		link: "#",
		date: "1 hr ago",
		imgAlt: "recent articles image",
	},
];

export default function RecentArticles() {
	return (
		<div className="RecentArticles">
			<header>
				<h5>recent articles</h5>
				<p className="HL" role="Horizontal Line"></p>
			</header>
			<div className="Body">
				{recentArticles.map((item) => {
					const { link, imgSrc, imgAlt, summary, date, id } = item;

					return (
						<RecentArticlesCard
							key={id}
							imgAlt={imgAlt}
							summary={summary}
							date={date}
							link={link}
							imgSrc={imgSrc}
						/>
					);
				})}
			</div>
		</div>
	);
}
