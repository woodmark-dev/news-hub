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
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praese",
		link: "#",
		date: "1 hr ago",
		imgAlt: "recent articles image",
	},
	{
		id: 2,
		imgSrc: "/featured-images/Rectangle25.png",
		summary:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praese",
		link: "#",
		date: "1 hr ago",
		imgAlt: "recent articles image",
	},
	{
		id: 3,
		imgSrc: "/featured-images/Rectangle26.png",
		summary:
			"Proin placerat quis sem a venenatis. Nullam sit amet diam eu libero lobortis laoreet. Praese",
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
